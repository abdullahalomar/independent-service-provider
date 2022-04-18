import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-center mt-2'>Question & Answer</h2>
              <div className='container mt-4 border border-4 bg-light'>
            
             <div class="row ">
                <div class="col-6">
                    <h6>প্রশ্ন ঃ Difference between `authorization` and `authentication`?</h6>
                    <p>
                Authentication হলো কেউ কে তা যাচাই করার প্রক্রিয়া, Authorization হলো ব্যবহারকারীর কোন নির্দিষ্ট অ্যাপ্লিকেশন, ফাইল এবং ডেটাতে অ্যাক্সেস রয়েছে তা যাচাই করার প্রক্রিয়া।
 Authentication হল ব্যবহারকারীরা যাকে তারা দাবি করে তা যাচাই করার কাজ। এটি যেকোনো নিরাপত্তা প্রক্রিয়ার প্রথম ধাপ। যদি একজন ব্যবহারকারী সঠিক ডেটা প্রবেশ করে, তবে সিস্টেমটি পরিচয়টি বৈধ বলে ধরে নেয় এবং অ্যাক্সেসটিতে অনুমোদন দেয়। কাউকে সার্ভারে একটি নির্দিষ্ট ফাইল ডাউনলোড করার অনুমতি দেওয়া বা পৃথক ব্যবহারকারীদের একটি অ্যাপ্লিকেশনে Administrative অ্যাক্সেস প্রদান করা Authorization এর ভালো উদাহরণ।যদি একজন একজন ব্যবহারকারীর তথ্য খুঁজে বের করে, তবে সিস্টেমটি নীতিটি বলে বলে সঠিক গণনা করে।
                </p>
           </div>
                <div class="col-6 border border-4">
                <h6>প্রশ্ন ঃ Why are you using `firebase`? What other options do you have to implement authentication?</h6>
                <p>
                Firebase Authentication ব্যাকএন্ড service, সহজে ব্যবহারযোগ্য SDK, এবং অ্যাপে ব্যবহারকারীদের প্রমাণীকরণের জন্য তৈরি UI লাইব্রেরি প্রদান করে। এটি পাসওয়ার্ড, ফোন নম্বর, Google, Facebook এবং Twitter এর মতো জনপ্রিয় ফেডারেটেড পরিচয় প্রদানকারী এবং আরও অনেক কিছু ব্যবহার করে Authentication সমর্থন করে।
তাছাড়া বিভিন্ন উপায়ের মাধ্যমে আমরা Authentication করতে পারি,
কুকি-ভিত্তিক প্রমাণীকরণ
টোকেন-ভিত্তিক প্রমাণীকরণ
তৃতীয় পক্ষের অ্যাক্সেস (OAuth, API-টোকেন)
OpenId
SAML
                </p>
            </div>
                <div class="col-6 border border-4">
                <h6>প্রশ্ন ঃ What other services does `firebase` provide other than authentication?</h6>
                <p>
                Firebase মূলত Firebase inc দ্বারা বিকশিত এবং পরে Google দ্বারা অধিগ্রহণ করা হয়েছে৷  এটি ওয়েব, iOS, Android এবং OS X ক্লায়েন্টের সাথে সামঞ্জস্যপূর্ণ। ফায়ারবেসে Authenti
cation ছাড়াও, ডেভেলপারদের ব্যাকএন্ড প্রোগ্রামিং, API ডেভেলপমেন্ট, ডাটাবেস (রিয়েল-টাইম ক্লাউড-হোস্টেড NoSQL ডাটাবেস এবং ক্লাউড ফায়ারস্টোর), ফাইল স্টোরেজ ইত্যাদি কাজ গুলো করা যায়। Firebase হল একটি সম্পূর্ণ প্যাকেজ যা  মোবাইল বা ওয়েব অ্যাপ্লিকেশনগুলিকে কম সংস্থান এবং আরও দক্ষতার সাথে দ্রুত Access  করতে পারে। Firebase আরও কিছু  ব্যবহার দেখানো হল: 
Cloud Firestore
Cloud Functions
Authentication
Hosting
Cloud Storage
Google Analytics
Predictions
Cloud Messaging
Dynamic Links
Remote Config
                </p>
           </div>
       </div>
        </div>
      </div>
       
    );
};

export default Blog;