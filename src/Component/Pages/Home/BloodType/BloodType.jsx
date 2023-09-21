const BloodType = () => {
  const a = "/src/assets/BloodGroup/A+.jpg";
  const a2 = "/src/assets/BloodGroup/A-.jpg";
  const b =  "/src/assets/BloodGroup/B+.jpg";
  const b2 =  "/src/assets/BloodGroup/B-.jpg";
  const ab = "/src/assets/BloodGroup/AB+.png";
  const ab2 = "/src/assets/BloodGroup/AB-.png";
  const o = "/src/assets/BloodGroup/O+.jpg";
  const o2 = "/src/assets/BloodGroup/O-.jpg";
  return (
    <div className="w-full py-16  p-5 container mx-auto">
      <h3 className="text-2xl pb-5 text-center text-rose-700 underline">
        কয়টি ভিন্ন রক্তের গ্রুপ আছে?
      </h3>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700">
        <div className="flex gap-2">
          <img className="w-32 h-32 mx-auto" src={a} alt="" />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              A+ বাংলাদেশের তৃতীয় সর্বাধিক সাধারণ রক্তের গ্রুপ। ২৬.৩%
              বাংলাদেশি এই রক্তের গ্রুপ শেয়ার করে।
            </h3>
            <h4>
              A+ লোহিত রক্তকণিকা A+ এবং AB+ রোগিকে রক্ত দিতে পারবে এবং A+ , A- , AB+
              , AB- লোহিত রক্তকণিকা থেকে পেতে পারবে ।
            </h4>
          </div>
        </div>
        <div className="flex gap-2">
          <img className="w-32 h-32 mx-auto" src={a2} alt="" />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              A- রক্ত বিরল রক্তের গ্রুপগুলির মধ্যে একটি। বাংলাদেশের মাত্র ০.৪৮%
              এই রক্তের গ্রুপ শেয়ার করে।
            </h3>
            <h4>
              A- লোহিত রক্তকণিকা A+ , A- , AB+ এবং AB- রোগিকে রক্ত দিতে পারবে এবং A-
              , O- লোহিত রক্তকণিকা থেকে পেতে পারবে ।
            </h4>
          </div>
        </div>

        <div className="flex gap-2">
          <img className="w-32 h-32 mx-auto" src={ab} alt="" />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              AB+ রোগীরা যে কোনো রক্তের গ্রুপের দাতাদের কাছ থেকে লাল রক্ত কণিকা
              গ্রহণ করতে পারে এবং বাংলাদেশের ৯.৫৯% এই রক্তের গ্রুপ ভাগ করে নেয়।
            </h3>
            <h4>
              AB+ লোহিত রক্তকণিকা শুধুমাত্র AB+ রোগিকে রক্ত দিতে পারবে এবং সকল গ্রুপ থেকে পেতে পারবে ।
            </h4>
          </div>
        </div>
        <div className="flex gap-2">
          <img className="w-32 h-32 mx-auto" src={ab2} alt="" />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              AB- রোগীরা অন্য যেকোনো আরএইচ নেগেটিভ রক্তের গ্রুপের দাতাদের কাছ থেকে লোহিত রক্ত কণিকা গ্রহণ করতে পারে — বাংলাদেশের মাত্র ০.১৭% এই রক্তের গ্রুপ ভাগ করে।
            </h3>
            <h4>
              AB- লোহিত রক্তকণিকা AB+ এবং AB- রোগিকে রক্ত দিতে পারবে এবং   A- , B- , O- , AB- লোহিত রক্তকণিকা থেকে পেতে পারবে ।
            </h4>
          </div>
        </div>
        <div className="flex gap-2">
          <img className="w-32 h-32 mx-auto" src={b} alt="" />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              B+ এটি বাংলাদেশে সবচেয়ে সাধারণ রক্তের গ্রুপ । বাংলাদেশের ৩৩.১২% এই রক্তের গ্রুপ ভাগ করে।
            </h3>
            <h4>
              B+ লোহিত রক্তকণিকা B+ এবং  AB+  রোগিকে রক্ত দিতে পারবে এবং B+ ,  B- , O+ , O- লোহিত রক্তকণিকা থেকে পেতে পারবে ।
            </h4>
          </div>
        </div>
        <div className="flex gap-2">
          <img className="w-32 h-32 mx-auto" src={b2} alt="" />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              B- বাংলাদেশের মাত্র 0.6% এই রক্তের গ্রুপ ভাগ করে । একটি বিশাল প্রভাব সহ একটি ছোট শতাংশ।
            </h3>
            <h4>
              B- লোহিত রক্তকণিকা B+ , B- ,  AB+ , AB-  রোগিকে রক্ত দিতে পারবে এবং B- , O- লোহিত রক্তকণিকা থেকে পেতে পারবে ।
            </h4>
          </div>
        </div>
        <div className="flex gap-2">
          <img className="w-32 h-32 mx-auto" src={o} alt="" />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              O+ বাংলাদেশের দ্বিতীয় সর্বাধিক সাধারণ রক্তের গ্রুপ। ২৯.২১%
              বাংলাদেশি এই রক্তের গ্রুপ শেয়ার করে।
            </h3>
            <h4>
              O+ লোহিত রক্তকণিকা A+ , B+ , AB+ , O+ রোগিকে রক্ত দিতে পারবে এবং O+ , O- লোহিত রক্তকণিকা থেকে পেতে পারবে ।
            </h4>
          </div>
        </div>
        <div className="flex gap-2">
          <img className="w-32 h-32 mx-auto" src={o} alt="" />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
            O- রক্তের অসামান্য ক্ষমতা রয়েছে — বাংলাদেশের মাত্র ০.৫৩% এই রক্তের গ্রুপ ভাগ করে।
            </h3>
            <h4>
              O- লোহিত রক্তকণিকা সকল গ্রুপকে রক্ত দিতে পারবে এবং শুধুমাত্র O- লোহিত রক্তকণিকা থেকে পেতে পারবে ।
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodType;
