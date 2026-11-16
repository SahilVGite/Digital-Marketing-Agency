import PageWrapper from '../components/common/PageWrapper.jsx'
import PageHero from '../components/common/PageHero.jsx'
import Button from '../components/common/Button.jsx'

export default function NotFound() {
  return (
    <PageWrapper title="Page Not Found">
      <PageHero
        eyebrow="Error 404"
        title={<>This page took a <span className="text-gradient">wrong turn.</span></>}
        text="The page you are looking for does not exist or has moved. Let's get you back on track."
      >
        <div className="flex flex-wrap gap-3">
          <Button to="/" variant="lime" size="lg">Back to home</Button>
          <Button to="/contact" variant="outline" size="lg">Contact us</Button>
        </div>
      </PageHero>
    </PageWrapper>
  )
}
