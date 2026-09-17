import NextLink from "next/link";

// Static export: every page is plain HTML, so prefetching RSC payloads for each
// visible link only costs requests and main-thread time.
export default function Link({ prefetch = false, ...props }) {
  return <NextLink prefetch={prefetch} {...props} />;
}
