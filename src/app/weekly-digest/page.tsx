export default function WeeklyDigestPage() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
              Subscribe 訂閲
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Weekly Digests 週報
            </span>
          </h1>
        </div>
        <div className="text-lg max-w-prose mx-auto">
          <div className="mt-8 rounded-lg border-l-4 border-primary bg-secondary/40 px-6 py-5">
            <p className="text-xl text-gray-800 leading-8 font-medium">
              The weekly digest has ended.
            </p>
            <p className="mt-2 text-gray-700 leading-7">
              The Clearing-house was sunset in 2026. No further digests will be
              sent and no new subscriptions are taken. Thank you to everyone who
              subscribed over the years.
            </p>
          </div>
          <br />
          <p>
            週報已於2026年停刊，不再發送新一期週報，亦不再接受訂閲。感謝各位多年來的支持。
          </p>
        </div>
      </div>
    </div>
  );
}
