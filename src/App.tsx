import './App.css'

const btnPrimary =
  'px-5 py-2.5 bg-brand-primary text-white text-sm font-medium rounded-md border border-brand-primary transition-all hover:brightness-90 active:scale-[0.98]'

const btnSecondary =
  'px-5 py-2.5 bg-brand-primary/10 text-brand-primary text-sm font-medium rounded-md border border-brand-primary transition-all hover:brightness-90 active:scale-[0.98]'

const Disabled =
  'bg-gray-100 text-gray-300 border border-gray-200 cursor-not-allowed'


function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-2">
      {children}
    </p>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-bg-main font-sans flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl">

        {/* 페이지 헤더 */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-text-main">버튼 컴포넌트</h1>
          <p className="mt-1 text-sm text-text-muted">
            DESIGN.md 기준 Hover &amp; Active 인터랙션 — 직접 눌러보세요
          </p>
        </div>

        {/* Primary Button */}
        <div className="bg-bg-surface border border-border-light rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-8 mb-4">
          <SectionLabel>Primary Button</SectionLabel>
          <p className="text-xs text-text-muted mb-5">
            화면 당 최대 1개. 핵심 행동(저장, 제출, 완료)에 사용.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" className={btnPrimary}>확인</button>
            <button type="button" className={btnPrimary}>저장하기</button>
            <button type="button" className={btnPrimary}>제출하기</button>
            <button type="button" className={`${btnPrimary} ${Disabled}`} disabled>
              비활성화
            </button>
          </div>
        </div>

        {/* Secondary Button */}
        <div className="bg-bg-surface border border-border-light rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-8 mb-4">
          <SectionLabel>Secondary Button</SectionLabel>
          <p className="text-xs text-text-muted mb-5">
            프라이머리를 보조. 취소, 이전, 수정 등에 사용.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" className={btnSecondary}>취소</button>
            <button type="button" className={btnSecondary}>이전으로</button>
            <button type="button" className={btnSecondary}>수정하기</button>
            <button type="button" className={`${btnSecondary} ${Disabled}`} disabled>
              비활성화
            </button>
          </div>
        </div>

        {/* 실제 사용 예시 */}
        <div className="bg-bg-surface border border-border-light rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-8 mb-6">
          <SectionLabel>실제 사용 예시 — 폼 하단 버튼 쌍</SectionLabel>
          <p className="text-xs text-text-muted mb-5">
            프라이머리 1개 + 세컨더리 1개 조합으로 시각적 위계 구성.
          </p>
          <div className="flex items-center gap-3">
            <button type="button" className={btnSecondary}>취소</button>
            <button type="button" className={btnPrimary}>저장하기</button>
          </div>
        </div>

        {/* 규칙 요약 */}
        <div className="rounded-md border border-border-light px-4 py-3 bg-bg-surface">
          <p className="text-xs text-text-muted leading-relaxed">
            <span className="font-medium text-text-main">공통 규칙 —</span>{' '}
            <code className="text-brand-primary">hover:brightness-90</code> ·{' '}
            <code className="text-brand-primary">active:scale-[0.98]</code> ·{' '}
            <code className="text-brand-primary">disabled:opacity-50</code> ·{' '}
            <code className="text-brand-primary">rounded-md (6px)</code>
          </p>
        </div>

      </div>
    </div>
  )
}

export default App
