const LandingHero = () => {
    return <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-xxl">
                <h1 className="mb-5 text-5xl font-bold">AI让工作更轻松，让生活更美好。</h1>
                <p className="mb-5">支持GPT3.5、GPT4</p>
                <a className="btn" href="/chat">免费体验</a>
            </div>
        </div>
    </div>;
}

export default LandingHero;