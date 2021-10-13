import { getPreviewPostBySlug } from "../../util/api";
import config from "../../components/config"

// http://localhost:9009/api/preview?secret=testing&slug=core-concepts

export default async function preview(req, res) {

    const { secret, slug } = req.query;

    if (secret !== config.previewSecret || !slug) {
        return res.status(401).json({ message: "Invalid token" });
    }

    // Fetch the headless CMS to check if the provided `slug` exists
    const post = await getPreviewPostBySlug(slug);

    // If the slug doesn't exist prevent preview mode from being enabled
    if (!post) {
        return res.status(401).json({ message: "Invalid slug" });
    }

    // Enable Preview Mode by setting the cookies
    res.setPreviewData({}); // more info on this here -> https://nextjs.org/docs/advanced-features/preview-mode

    // Redirect to the path from the fetched post
    // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
    // res.writeHead(307, { Location: `/posts/${post.slug}` })
    const url = `/posts/${post.slug}`;
    res.write(
        `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`
    );
    res.end();
}