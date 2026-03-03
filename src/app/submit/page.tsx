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
          <p className="mt-8 text-xl text-gray-500 leading-8">
            If you would like to receive credentials to add your events to the
            catalog, please send an email using your university or other
            professional email to{" "}
            <a href="mailto:fairbank@g.harvard.edu" className="text-primary font-medium hover:underline">
              fairbank@g.harvard.edu
            </a>.
          </p>
          <br />
          <p>
            假如閣下希望把貴機構舉辦的活動加入本目錄，請以大學或機構電郵帳號聯絡{" "}
            <a href="mailto:fairbank@g.harvard.edu" className="text-primary font-medium hover:underline">
              fairbank@g.harvard.edu
            </a>。
          </p>
        </div>
      </div>
    </div>
  );
}
