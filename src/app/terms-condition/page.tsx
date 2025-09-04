"use client"
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { carousel4 } from "@/assest";
import { NewsFlash, RHFHeroSection } from "@/components";

// ---------------------------------------------------

const montserrat = Montserrat({
    subsets: ["latin"], // required
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // choose the weights you need
    variable: "--font-montserrat",
});

// ---------------------------------------------------

const TermsCondition = () => {
    return (
        <div className={`w-full min-h-screen ${montserrat.className}`} >
            <RHFHeroSection img={carousel4?.src} />
            <div className="py-8 px-10 sm:px-24 sm:py-16 font-extralight text-primary-blue-color tracking-wide text-justify " >
                <p className="w-full text-center text-3xl sm:text-4xl uppercase text-primary-blue-color font-semibold mb-8" >TERMS OF USE</p>
                <ul className="list-[upper-alpha] list-outside [&>ul>li]:marker:font-normal [&>ul>li]:mb-4 [&>ul]:pl-8 [&>li]:text-left [&>li]:text-2xl sm:[&>li]:text-[28px] [&>li]:text-primary-blue-color [&>li]:uppercase [&>li]:font-semibold [&>li]:mt-8 [&>li]:mb-4" >
                    <li>General</li>
                    <ul className="list-decimal" >
                        <li>
                            These are the &quot;Terms of Use&quot; (&quot;Terms&quot;) that form a binding contract between Protingent India LLP (&quot;Protingent&quot; or &quot;We&quot; or &quot;Us&quot; or &quot;Our&quot;) and any person (&quot;You&quot; or &quot;Your&quot; or &quot;User&quot;) accessing Our website www.[Insert website domain](“Website”) in any capacity including but not limited to:
                        </li>
                        <div className="[&>p]:text-lg [&>p]:font-normal [&>p]:text-primary-blue-color mb-4" >
                            <p>a) Recruiter</p>
                            <p>b) Candidate or jobseeker</p>
                            <p>c) Advertiser</p>
                            <p>d) Visitor</p>
                            <p>e) User</p>
                        </div>
                        <li>
                            Please carefully review these Terms before utilizing Our services. By accessing or using Our Website to avail any of the services We offer,Youconfirm that You are the User and possess the complete authority to agree to these Terms either personally or on behalf of another User. In the event,You do not agree to these Terms, You may not access or Use the Website or any of Our services available through the same.
                        </li>
                        <li>
                            User shall be bound by these Terms, <span> <Link href={'/privacy-policy'} className="font-normal text-blue-500" > Privacy Policy</Link> </span> and all other rules, regulations, and terms of use discussed hereunder or provided by Protingent in relation to any of its services offered.
                        </li>
                        <li>
                            We retain the right to modify, terminate, supplement, or otherwise change any part of the Terms, Privacy Policy, rules, or regulations for any of the services offered by the Protingent. Such change will be published in the event of any amendments. Additionally, Wemay, at Our discretion, notify You of these changes through email or any other electronic mode of communication, as deem fit by the Protingent. You have the option to indicate non-acceptance of such modified terms, rules, regulations, by following the instructions provided in such emails or communication. If You do not indicate non-acceptance within the specified time frame, Youwill be deemed to have accepted the updated terms, rules, and regulations.
                        </li>
                        <li>
                            In the event, You i.e., User deny to accept any change in the Terms, Privacy Policy, rules and/or regulations of the Protingent with respect to the services offered, the Protingent reserves the right to abstain You from availing the services of the Protingent, or using the Website or content of the Protingent.
                        </li>
                        <li>
                            Participation in any event on or through the Website or viewing of certain content may be subject to further terms and conditions as may be notified by Us from time to time on the Website or otherwise. You shall ensure that You have read, understood and agree to abide by the rules and regulations ofsuch event.
                        </li>
                    </ul>
                    <li>
                        INDEPENDENT CONTRACTOR
                    </li>
                    <ul className="list-decimal" >
                        <li>
                            Both parties i.e.Protingent and the User are independent contractor and nothing in these Terms is intended to, or shall be deemed to, establish any partnership, joint venture, employer-employee or agency between the Protingent and the User, appoint either party as the agent of the other, nor authorize either party to make or enter into any commitments for or on behalf of the other party. Protingent&apos;s obligations shall be limited only to the services offered by the Protingentand do not in any way include acting on behalf of the User.
                        </li>
                    </ul>
                    <li>
                        REGISTERING FOR AN ACCOUNT
                    </li>
                    <ul className="list-decimal" >
                        <li>
                            Where any registration or account is required to be registered for the purpose of availing the services, Youshall provide a legitimate official email ID, contact number (preferably mobile number) and other details as requested. Your submission of such information shall warrant as the details entered by You are true and valid and requires no checks from the Protingent&apos;s end. However, Protingent shall reserve the right to do any background checks, or due diligence on such information, as and when it may deem fit.
                        </li>
                        <li>
                            Any account registered as aforesaid shall be utilized solely by You or any other person, authorized by You. In the event, the abovementioned account is registered by any third-party on behalf of You, then such third-party may have the right to control access to such account.
                        </li>
                        <li>
                            In case,Protingentsuspects that any details entered by You are not genuine, or You have created a false account, Protingentshall delete, suspend and delete Your account, along with any data in that account, if any.
                        </li>
                    </ul>
                    <li>
                        INTELLECTUAL PROPERTY
                    </li>
                    <ul className="list-decimal" >
                        <li>
                            The content, design, and functions of the Website, along with all data, text, images, and graphics, are the property of Protingent. User acknowledges that Protingent retains all rights and claims related to this content, and by using the Website, User do not acquire any rights to it. Unauthorized use of any marks, content, or design for purposes other than those permitted by law is strictly prohibited without Protingent&apos;s express written permission.
                        </li>
                        <li>
                            All materials, including text, graphics, logos, images, audio and video clips, and software, if any, on the Website, are owned or controlled by Protingent and its content suppliers. These materials are protected by design, trademark, copyright, and other intellectual property laws.
                        </li>
                        <li>
                            Protingentshall also have a royalty-free, worldwide, transferable, sub-licensable, irrevocable and perpetual license to incorporate into the services or Website or otherwise use any suggestions, enhancement requests, recommendations or other feedback that it receives from or on behalf of the User.
                        </li>
                    </ul>
                    <li>
                        THIRD PARTY CONTENT
                    </li>
                    <ul className="list-decimal" >
                        <li>
                            The Website may contain links to third-party websites not owned or endorsed by the Protingent, and some content on the Website may come from external sources (&quot;Third-Party Content&quot;). This Third-Party Content may be provided for general informational purposes only. You acknowledge that Protingenthas no control over the sources of Third-Party Content. Protingentdoes not offer any warranties regarding Third-Party Content, and You release Protingentfrom any or all claims, losses, or damages arising from the use of or inability to use such Third-Party Content or third-party websites or links. Protingentdisclaims all liability for the content on these third-party websites. It&apos;s advisable to carefully review the terms and conditions of these third-party websites before using their services.
                        </li>
                        <li>
                            Protingent shall not be responsible for removal of any details displayed or used by the third parties on their respective websites, Google Search Index, etc.
                        </li>
                    </ul>
                    <li>
                        DISCLAIMER OF WARRANTIES
                    </li>
                    <ul className="list-decimal" >
                        <li>
                            The content and information on this Website, including all materials, are provided on &quot;as-is basis&quot;, without any warranty or guarantee, whether express or implied. The aforementioned includes and is not limited to a specific purpose, uninterrupted access, security, accuracy, completeness, or freedom from errors, viruses, malware, or other harmful elements. The Protingent makes no representations or warranties regarding the operation of this Website, its information, content, or other materials. The Protingent disclaims all responsibility for any direct, indirect, consequential, or other damages arising from the use of this Website, including but not limited to loss of employment, jobs, profits, business interruption, or loss of data.

                        </li>
                        <li>
                            The information on this Website may be sourced from various internal and external sources. While efforts are made to ensure accuracy, there might be typographical errors or outdated information. The Protingent reserves the right to make changes or updates to the content, information, or services offered on this Website without prior notice.
                        </li>
                        <li>
                            The Website is operated from India, and User accessing it from other locations may do so at their own risk, ensuring compliance with local laws.
                        </li>
                        <li>
                            The Protingent may introduce new features or modify existing ones without prior notice. The Protingent also has the right to discontinue or terminate services or the Website itself without notice. Additionally, the Protingent and its partners may display advertisements, and User agrees to this as a condition for accessing the Website and services of the Protingent.
                        </li>
                        <li>
                            Protingent does not warrant that the functions or features (including but not limited to mechanisms for the downloading and uploading of content) will be uninterrupted, secure, or free of errors.
                        </li>
                        <li>
                            Protingent does not warrant that the services or server(s) that make the services or Website available are free of viruses or other harmful components.
                        </li>
                    </ul>
                    <li>
                        DATA PROTECTION AND SERVICES
                    </li>
                    <ul className="list-decimal" >
                        <li>
                            The treatment of all or any personal information of the User shall be governed by our Privacy Policy, incorporated by reference into these Terms.
                        </li>
                        <li>
                            Protingentmay act on the request of the User and forthwith remove any logos/details displayed on the Website. However, Protingent shall not be responsible for removal of such details from third parties such as other jobs sites, Google Search Index, etc.
                        </li>
                    </ul>
                    <li>
                        CONFIDENTIALITY
                    </li>
                    <ul className="list-decimal" >
                        <li>
                            All information designated as &quot;confidential&quot; disclosed by User to Protingent or vice versashall not be used or disclosed for any purpose outside the scope of these Terms, except when required by the process of law or with the concerned party&apos;s prior permission. Such information shall not include information that may be:
                            <ul className="list-[lower-alpha] pl-8 my-4 text-primary-blue-color font-semibold [&>li]:mb-4" >
                                <li>in the public domain;</li>
                                <li>required or requested to be disclosed under any applicable law or any regulatory requirements;</li>
                                <li>acquired by such party from a source not obligated to any other party, or its affiliates to keep such information confidential.</li>
                                <li>already known or in the lawful possession of a receiving party prior to disclosure by the other party.</li>
                                <li>materially similar to the information, and have been independently developed by a party without reference to any information furnished by the other party.</li>
                            </ul>
                        </li>
                        <li>
                            User agrees that Protingent may disclose information to its employees, consultants, agents, affiliates or advisors on a need-to-know basis such information solely for the purpose of performing Protingent&apos;s obligations under these Terms and only to those who are obligated to maintain the confidentiality of such information
                        </li>
                    </ul>
                    <li>
                        LIMITATION OF LIABILITY
                    </li>
                    <ul className="list-decimal" >
                        <li>
                            To the extent permitted by law, Protingent expressly excludes all liability for any indirect, incidental, special, consequential, punitive or exemplary damages, however, caused including but not limited to, damages for loss of profits, goodwill, or other intangible losses (even if Protingent has been advised of the possibility of such damages including, without limitation, loss of business, lost profits or revenue.), if such liability results from any of the following:

                            <ul className="list-[lower-alpha] pl-8 my-4 text-primary-blue-color font-semibold [&>li]:mb-4"  >
                                <li>use or the inability to use the services offered by Protingent;</li>
                                <li>statements or conduct of any third partyproviding services;</li>
                                <li>The cost of procurement of substitute services resulting from any information or services purchased or obtained or messages received or transactions entered into through or from the Service</li>
                            </ul>
                        </li>
                        <li>
                            In no event shallProtingent have any obligations or liability under this section arising from: (i) use of the Website in a modified form or in combination with materials not furnished by Protingent; or (ii) any content, information, or data provided by User, or other third parties.
                        </li>
                    </ul>
                    <li>
                        GOVERNING LAW AND JURISDICTION
                    </li>
                    <ul className="list-decimal" >
                        <li>
                            These Terms and all transactions entered into or through the Website and the relationship between You and Protingent shall be governed in accordance with the laws of India.
                        </li>
                        <li>
                            You agree that all disputes arising under or in connection with or in relation hereto the Website, the Terms or any transactions entered into on or through the Website or the relationship between You and Protingent shall be subject to the exclusive jurisdiction of the courts at Jaipur, Rajasthan, India.
                        </li>
                        <li>
                            35. Notwithstanding anything to the contrary contained anywhere in these Terms, You agree that monetary damages may not be an adequate remedy for the losses that may be sustained by Protingent from a breach of the terms of this Website and accordingly, Protingent shall be entitled to seek an injunction, restraining order, right for recovery, suit for specific performance or such other equitable relief as a court of competent jurisdiction may deem necessary or appropriate to restrain You from committing any violation of these terms and conditions.
                        </li>
                    </ul>
                    <li>
                        MISCELLANEOUS
                    </li>
                    <ul className="list-decimal [&>li>p]:mb-4 [&>li>p]:font-extralight [&>li]:text-primary-blue-color [&>li]:font-semibold [&>li]:text-lg" >
                        <li>
                            Notices
                            <p>
                                User agrees that We may provide notices to You as (i) an email sent to an address provided by the User, or (ii) through other means including mobile number, telephone, or mail. User agrees to keep its contact information up to date and that Protingentshall not be liable for any action or damages that rise from incorrect or out-dated information of the User.
                            </p>
                        </li>
                        <li>
                            Modifications
                            <p>
                                Protingent may, in its sole discretion revise these Terms from time to time, without prior notice in the interest of bettering and furthering User experience and Our services. The latest copy will always be available on Our Website and the onus shall lie on User to keep yourself informed of changes from time to time. If changes to these Terms are made, that in Our sole discretion, are material, Wemay notify You either by posting a notice of such changes and/or via email associated with the User. By continuing to access or use the service after the changes become effective, Youagree to be bound by the revised Terms.
                            </p>
                        </li>
                        <li>
                            Severability
                            <p>
                                All provisions of these Terms shall be severable and no such provisions shall be affected by the invalidity of any other provision to the extent that such invalidity does not also render such other provisions invalid. In the event of the invalidity of any provision, Terms shall be interpreted and enforced as if all the provisions thereby rendered invalid were not contained herein. If any provision of these Terms shall be susceptible to two interpretations, one of which would render the provision invalid and the other of which would cause the provision to be valid, such provision shall be deemed to have the meaning which would cause it to be valid. If any provision of these Terms shall be prohibited by or adjudicated by a court to be unlawful, void or unenforceable such provision shall to the extent required, be severed from these Terms and rendered ineffective as far as possible without modifying the remaining provisions of Terms and shall not in any way affect any other provisions or the validity or enforcement of these Terms.
                            </p>
                        </li>
                        <li>
                            Waiver
                            <p>
                                Any party&apos;s delay or failure to exercise any right, power or privilege hereunder shall not operate as a waiver, nor shall any single or partial exercise of any right, power of privilegeprecludes any other or further exercise thereof. Any waiver of a right, power or privilege hereunder on any single occasion, shall not prevent a party from subsequently, on any subsequent occasion, requiring and enforcing compliance with the obligations under these Terms.
                            </p>
                        </li>
                        <li>
                            Complaints, Notices and Feedback
                            <p>
                                We respect the intellectual property rights of others and require that information posted on Website be accurate and not in violation of the intellectual property rights or other rights of third parties. If You find any User or content that is not accurate or truthful, Youcan email Us any complaints on [mention email here]. You may also notify Us or send feedback on: 613, Regus Jaipur City Centre, Amer Clark Hotel, Jaipur - 302018, Rajasthan, India.
                            </p>
                        </li>
                    </ul>
                </ul>
            </div>
            <NewsFlash />
        </div>
    )
}

export default TermsCondition;
