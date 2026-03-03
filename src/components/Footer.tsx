export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white fixed bottom-0 inset-x-0">
      <p className="mt-2 mb-2 text-center text-base text-red-900">
        &copy; 2020-{year}{" "}
        <a href="https://fairbank.fas.harvard.edu" target="_blank" rel="noreferrer">
          Fairbank Center for Chinese Studies
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
