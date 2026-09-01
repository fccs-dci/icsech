export default function SubmitPage() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
              Submitting 登記
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Events 活動
            </span>
          </h1>
          <div className="mt-8 rounded-lg border-l-4 border-primary bg-secondary/40 px-6 py-5">
            <p className="text-xl text-gray-800 leading-8 font-medium">
              Submissions are closed.
            </p>
            <p className="mt-2 text-gray-700 leading-7">
              The Clearing-house was sunset in 2026. It is no longer updated and
              no new events or information will be added. The website remains
              online as an archive of the events listed between 2020 and 2026.
            </p>
          </div>
          <br />
          <p>
            本網站已於2026年停止運作，不再接受活動登記，亦不會再增加任何活動或資訊。網站將保留作為2020至2026年活動資訊的檔案。
          </p>
        </div>
      </div>
    </div>
  );
}
