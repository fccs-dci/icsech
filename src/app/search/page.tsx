import AlgoliaSearch from "@/components/AlgoliaSearch";

export default function SearchPage() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto mb-10">
          <h1>
            <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
              Search
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Search Events 搜尋活動
            </span>
          </h1>
        </div>
        <div className="max-w-4xl mx-auto">
          <AlgoliaSearch />
        </div>
      </div>
    </div>
  );
}
