import React from 'react';
import { useState, useEffect } from 'react';

import Navbar from "../../layouts/navbar";
import Footer from "../../layouts/footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen ">



        <div className="flex flex-col md:flex-row w-full">

          <div className="bg-red-700 text-white p-8 w-full"
            style={{
              backgroundImage: "url('https://png.pngtree.com/background/20230710/original/pngtree-jordanian-flag-painting-adorns-brick-wall-solid-square-symbol-photo-picture-image_4200049.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              // width: "100%", // Set to your desired width
              // height: "100vh" // Set to your desired height or use a specific value
            }}>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-right">من نحن</h2>
              <div className="space-y-6 text-right text-lg bg-black bg-opacity-50 p-7 rounded-md">
                <p>
                  الهيئة المستقلة للانتخابات هي الجهة المسؤولة عن إدارة العملية الانتخابية في الأردن وضمان نزاهتها وشفافيتها.
                </p>
                <h3 className="text-2xl font-semibold">مهمتنا</h3>
                <p>
                  نسعى لتعزيز الديمقراطية في الأردن من خلال إدارة انتخابات حرة ونزيهة، وضمان مشاركة جميع المواطنين في العملية الانتخابية.
                </p>
                <h3 className="text-2xl font-semibold">رؤيتنا</h3>
                <p>
                  نطمح لأن نكون مؤسسة رائدة في مجال إدارة الانتخابات، تحظى بثقة الشعب الأردني وتساهم في تطوير العملية الديمقراطية في المملكة.
                </p>
              </div>
            </div>


          </div>

        </div>


        <div className="bg-gray-200 p-24">
          <div className=" p-8 w-full mb-10">
            <div className="text-center max-w-2xl mx-auto">

              <h2 className="text-3xl font-semibold text-gray-800 mb-6">قيمنا</h2>
              <ul className="flex flex-wrap justify-center text-gray-600 text-xl">
                <li className="m-2 p-2 bg-[#00000020] text-red-700 rounded">الشفافية</li>
                <li className="m-2 p-2 bg-[#00000020] text-green-600 rounded">النزاهة</li>
                <li className="m-2 p-2 bg-[#00000020] text-gray-100 rounded">الحيادية</li>
                <li className="m-2 p-2 bg-[#00000020] text-black rounded">الكفاءة</li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-right">عن الهيئة</h2>
            <div className="text-right text-lg space-y-4">
              <p>
                تأسست الهيئة المستقلة للانتخاب عام 2012 كجهة مستقلة تعنى بإدارة العملية الانتخابية والإشراف عليها دون تدخل أو تأثير من أي جهة, وتعد الهيئة إحدى ثمرات الإصلاح السياسي في المملكة الأردنية الهاشمية بقيادة جلالة الملك عبدالله الثاني ابن الحسين، وتعبر عن استجابة المؤسسة الرسمية للمطالب الشعبية.
              </p>
              <ul className="list-disc list-inside">
                <li>تأسست الهيئة بهدف ضمان إجراء انتخابات نيابية تتوافق مع المعايير الدولية، وبما يكفل إعادة ثقة المواطن بالعملية الانتخابية ومخرجاتها، ومعالجة تراكمات الماضي السلبية والبناء على ما تم تحقيقه من إنجازات وخطواتٍ إصلاحية.</li>
                <li>باشرت الهيئة عملها في شهر أيار من العام 2012 وتمكنت خلال فترة قياسية من العمل على بناء هيكلها المؤسسي وتوفير ضمانات استدامته، والإعداد لإجراء انتخابات مجلس النواب الأردني السابع عشر التي جرت مطلع العام 2013 كأول انتخابات تديرها الهيئة بعد إنشائها.</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="bg-white p-8 m-20 flex justify-between items-center">
          <div className="max-w-6xl ">
            <h2 className="text-3xl font-bold mb-6 text-right">أهدافنا الاستراتيجية</h2>
            <ul className="text-right text-lg list-disc list-inside space-y-2">
              <li>تعزيز ثقة المواطنين في العملية الانتخابية</li>
              <li>ضمان نزاهة وشفافية الانتخابات</li>
              <li>تطوير الإجراءات والتقنيات المستخدمة في العملية الانتخابية</li>
              <li>تعزيز المشاركة السياسية للمواطنين</li>
            </ul>
          </div>
          <img src="https://jordanews.com/wp-content/uploads/2024/04/main_image662f77aaf2651.jpg" alt="Authority Image 2" className="w-80 h-auto m-2" />

        </div>

        {/* <div className="bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-right">إنجازاتنا</h2>
          <div className="text-right text-lg space-y-4">
            <p>منذ تأسيسها، حققت الهيئة المستقلة للانتخابات العديد من الإنجازات، منها:</p>
            <ul className="list-disc list-inside">
              <li>إدارة انتخابات نيابية وبلدية ناجحة</li>
              <li>تطوير نظام إلكتروني متكامل لإدارة العملية الانتخابية</li>
              <li>تنفيذ برامج توعية للناخبين على مستوى المملكة</li>
              <li>التعاون مع منظمات دولية لتبادل الخبرات في مجال الانتخابات</li>
            </ul>
          </div>
        </div>
      </div> */}

        {/* <div className="mt-8 bg-white flex justify-center items-center p-10 m-16"> */}
        {/* <img src="https://th.bing.com/th/id/OIP.vvVRVsZGl8ozlVbBeEtz2QHaD4?w=323&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Authority Image 1" className="w-80 h-auto m-2" /> */}
        {/* <img src="/api/placeholder/300/200" alt="Authority Image 3" className="w-full h-auto" />
            <img src="/api/placeholder/300/200" alt="Authority Image 4" className="w-full h-auto" /> */}
        {/* </div> */}

        <div className="bg-red-700 text-white p-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-right">تواصل معنا</h2>
            <div className="text-right text-lg space-y-2">
              <p>نحن نرحب بتواصلكم واستفساراتكم. يمكنكم الاتصال بنا عبر:</p>
              <p>الهاتف: +962 6 000 0000</p>
              <p>البريد الإلكتروني: info@iec.jo</p>
              <p>العنوان: عمان، الأردن</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;




// <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl overflow-hidden">
//         <div className="flex flex-col md:flex-row">
//           <div className="bg-red-700 text-white p-8 md:w-1/2">
//             <h2 className="text-3xl font-bold mb-6 text-right">من نحن</h2>
//             <div className="space-y-4 text-right">
//               <p>
//                 الهيئة المستقلة للانتخابات هي الجهة المسؤولة عن إدارة العملية الانتخابية في الأردن وضمان نزاهتها وشفافيتها.
//               </p>
//               <h3 className="text-xl font-semibold">مهمتنا</h3>
//               <p>
//                 نسعى لتعزيز الديمقراطية في الأردن من خلال إدارة انتخابات حرة ونزيهة، وضمان مشاركة جميع المواطنين في العملية الانتخابية.
//               </p>
//               <h3 className="text-xl font-semibold">رؤيتنا</h3>
//               <p>
//                 نطمح لأن نكون مؤسسة رائدة في مجال إدارة الانتخابات، تحظى بثقة الشعب الأردني وتساهم في تطوير العملية الديمقراطية في المملكة.
//               </p>
//             </div>
//           </div>
//           <div className="bg-white p-8 md:w-1/2 flex items-center justify-center">
//             <div className="text-center">
//               <div className="w-32 h-32 mx-auto mb-6">
//                 {/* Replace with actual Jordan flag or emblem */}
//                 <div className="w-full h-full bg-red-700 relative">
//                   <div className="absolute top-1/3 left-0 w-full h-1/3 bg-white"></div>
//                   <div className="absolute top-0 left-0 w-0 h-0
//                                   border-t-[80px] border-t-transparent
//                                   border-l-[160px] border-l-green-600"></div>
//                 </div>
//               </div>
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">قيمنا</h2>
//               <ul className=" flex text-gray-600 text-right">
//                 <li className='m-1'>الشفافية</li>
//                 <li className='m-1'>النزاهة</li>
//                 <li className='m-1'>الحيادية</li>
//                 <li className='m-1'>الكفاءة</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>