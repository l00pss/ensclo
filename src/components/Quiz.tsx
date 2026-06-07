import { useState } from "react";
import { Check, Lightbulb, RotateCcw, X, Zap } from "lucide-react";
import type { QuizQuestion } from "../content/types";

interface Props {
  questions: QuizQuestion[];
  /** Quiz bitəndə nəticəni faizlə qaytarır. */
  onFinish?: (scorePercent: number) => void;
}

function isCorrect(q: QuizQuestion, given: string): boolean {
  if (q.type === "multiple-choice") return Number(given) === q.answer;
  const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");
  const accepted = [q.answer, ...(q.accept ?? [])].map(norm);
  return accepted.includes(norm(given));
}

function feedback(pct: number): { emoji: string; msg: string } {
  if (pct === 100) return { emoji: "🏆", msg: "Mükəmməl! Hamısı doğru." };
  if (pct >= 80) return { emoji: "🎉", msg: "Əla nəticə!" };
  if (pct >= 60) return { emoji: "👍", msg: "Yaxşıdır, davam et." };
  return { emoji: "💪", msg: "Təkrar et — bacararsan!" };
}

export default function Quiz({ questions, onFinish }: Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = questions.every((_, i) => answers[i] !== undefined && answers[i] !== "");
  const correctCount = questions.filter((q, i) =>
    answers[i] != null ? isCorrect(q, answers[i]) : false,
  ).length;
  const scorePercent = Math.round((correctCount / questions.length) * 100);
  const answeredCount = Object.values(answers).filter((v) => v !== "").length;

  const submit = () => {
    setSubmitted(true);
    onFinish?.(scorePercent);
  };
  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="space-y-5">
      {!submitted && (
        <div className="flex items-center gap-3 text-sm text-muted">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-brand-600 transition-all"
              style={{ width: `${(answeredCount / questions.length) * 100}%` }}
            />
          </div>
          <span className="tnum">
            {answeredCount}/{questions.length}
          </span>
        </div>
      )}

      {submitted && (
        <div className="animate-pop rounded-2xl border border-brand-200 bg-brand-50 p-5 text-center dark:border-brand-500/30 dark:bg-brand-500/10">
          <div className="text-4xl">{feedback(scorePercent).emoji}</div>
          <p className="mt-2 font-display text-2xl font-bold text-fg tnum">
            {correctCount} / {questions.length} ({scorePercent}%)
          </p>
          <p className="text-sm text-muted">{feedback(scorePercent).msg}</p>
          <p className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 dark:text-amber-400">
            <Zap size={14} /> +{Math.round(scorePercent / 2)} XP
          </p>
        </div>
      )}

      {questions.map((q, i) => {
        const given = answers[i];
        const correct = submitted && given != null && isCorrect(q, given);
        const wrong = submitted && (given == null || !isCorrect(q, given));

        return (
          <div
            key={i}
            className={`rounded-2xl border p-4 transition ${
              submitted
                ? correct
                  ? "border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10"
                  : "border-red-300 bg-red-50 dark:border-red-500/30 dark:bg-red-500/10"
                : "border-line bg-surface shadow-card"
            }`}
          >
            <p className="font-medium text-fg">
              <span className="mr-2 text-faint tnum">{i + 1}.</span>
              {q.prompt}
            </p>

            {q.type === "multiple-choice" ? (
              <div className="mt-3 space-y-2">
                {q.options.map((opt, oi) => {
                  const chosen = given === String(oi);
                  const showCorrect = submitted && oi === q.answer;
                  return (
                    <label
                      key={oi}
                      className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-sm transition ${
                        showCorrect
                          ? "border-emerald-500/40 bg-emerald-100 dark:bg-emerald-500/15"
                          : chosen
                            ? "border-brand-400 bg-brand-50 dark:bg-brand-500/10"
                            : "border-line hover:bg-surface-2"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q-${i}`}
                        className="accent-brand-600"
                        disabled={submitted}
                        checked={chosen}
                        onChange={() => setAnswers((a) => ({ ...a, [i]: String(oi) }))}
                      />
                      <span className="flex-1 text-fg">{opt}</span>
                      {showCorrect && <Check size={16} className="text-emerald-600 dark:text-emerald-400" />}
                      {submitted && chosen && oi !== q.answer && <X size={16} className="text-red-500" />}
                    </label>
                  );
                })}
              </div>
            ) : (
              <input
                type="text"
                disabled={submitted}
                value={given ?? ""}
                onChange={(e) => setAnswers((a) => ({ ...a, [i]: e.target.value }))}
                placeholder="Cavabını yaz…"
                className="mt-3 w-full max-w-xs rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm text-fg transition focus:border-brand-500 disabled:opacity-60"
              />
            )}

            {submitted && (
              <div className="mt-3 text-sm">
                {wrong && (
                  <p className="text-red-600 dark:text-red-400">
                    Düzgün cavab:{" "}
                    <strong>{q.type === "multiple-choice" ? q.options[q.answer] : q.answer}</strong>
                  </p>
                )}
                {q.explanation && (
                  <p className="mt-1 flex items-start gap-1.5 text-muted">
                    <Lightbulb size={15} className="mt-0.5 shrink-0 text-amber-500" />
                    {q.explanation}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}

      {!submitted ? (
        <button
          type="button"
          disabled={!allAnswered}
          onClick={submit}
          className="w-full rounded-xl bg-brand-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-surface-2 disabled:text-faint sm:w-auto"
        >
          Cavabları yoxla
        </button>
      ) : (
        <button
          type="button"
          onClick={reset}
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-line bg-surface px-5 py-3 font-semibold text-fg shadow-sm transition hover:bg-surface-2 sm:w-auto"
        >
          <RotateCcw size={16} /> Yenidən cəhd et
        </button>
      )}
    </div>
  );
}
