import BlogSlugPage from "@/modules/blog/slug";
import HeaderWidget from "@/components/includes/HeaderWidget";
import { getDomain, getData } from "@/lib/data";
import Footer from "@/components/includes/Footer";
import Navigation from "@/components/includes/Navigation";
const BlogPost = async ({ params }) => {
  const [id, slug] = params.params;
  const c = await getData();
  const domain = getDomain();

  return (
    <>
      <HeaderWidget
        domain={domain}
        piwikId={c.data.piwikId}
        accountGA={c.data.accountGA}
        adsenseClientId={c.data.adsenseClientId}
      />
      <div className="tw-min-h-screen tw-pt-5 tw-pb-5 tw-mt-8tw-mb-8">
        <BlogSlugPage id={id} />
      </div>
      <Footer domain={domain} />
    </>
  );
};

export default BlogPost;
