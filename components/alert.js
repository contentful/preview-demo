export default function Alert({ preview }) {
  return (
    <div>
      <div className="py-2 text-center text-sm">
        {" "}
        {preview ? (
          <>
            This is page is a preview.{" "}
            <a
              href="/api/exit-preview"
              className="underline hover:text-cyan duration-200 transition-colors"
            >
              Click here
            </a>
            to exit preview mode.
          </>
        ) : (
          <>
            The source code for this demo is{" "}
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${""}`}
              className="underline hover:text-success duration-200 transition-colors"
            >
              available on GitHub{" "}
            </a>
            .{" "}
          </>
        )}{" "}
      </div>{" "}
    </div>
  );
}
