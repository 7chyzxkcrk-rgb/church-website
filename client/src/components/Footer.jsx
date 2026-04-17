export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-white font-bold mb-2">순천수정교회</p>
            <p className="text-sm">(57972) 전라남도 순천시 비래골길 28 (조례동) 순천 수정교회</p>
            <p className="text-sm">위임목사: 송재선 | 핸드폰: 061-722-9508</p>
            <p className="text-sm">TEL: 061-722-9561~5 | FAX: 061-722-9567</p>
          </div>
          <div className="text-sm space-y-1 text-right">
            <p className="cursor-pointer hover:text-white">개인정보처리방침</p>
            <p className="cursor-pointer hover:text-white">이메일무단수집거부</p>
          </div>
        </div>
        <p className="text-center text-xs mt-6 border-t border-gray-600 pt-4">
          Copyright © 순천수정교회 All rights reserved.
        </p>
      </div>
    </footer>
  )
}
