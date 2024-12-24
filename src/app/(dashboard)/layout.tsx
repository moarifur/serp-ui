const DashboardLayout = () => {
    return (
        <div className='h-screen flex'>
          {/* Left */}
          <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-amber-50">L</div>
          {/* Right */}
          <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-100">R</div>
        </div>
    );
};

export default DashboardLayout;
