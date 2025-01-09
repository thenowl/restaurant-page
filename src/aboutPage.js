export function aboutPage() {
  const aboutPageContainer = document.createElement("div");
  aboutPageContainer.classList.add("about-page-container");

  const headlineContainer = document.createElement("div");
  headlineContainer.classList.add("headline-container");
  const mainHeadline = document.createElement("h2");
  mainHeadline.classList.add("main-headline");
  mainHeadline.textContent = "peu à peu";
  headlineContainer.appendChild(mainHeadline);
  const subHeadline = document.createElement("h3");
  subHeadline.classList.add("sub-headline");
  subHeadline.textContent = "a better world..";
  headlineContainer.appendChild(subHeadline);
  aboutPageContainer.appendChild(headlineContainer);

  const aboutContentContainer = document.createElement("div");
  aboutContentContainer.classList.add("about-content-container");
  aboutPageContainer.appendChild(aboutContentContainer);
  const aboutContentP1 = document.createElement("p");
  aboutContentP1.classList.add("about-content");
  aboutContentP1.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio itaque dolore neque accusamus, possimus saepe exercitationem sunt molestias fugit in cumque, pariatur quia laudantium fugiat ut rem minima tempora. Quis eligendi temporibus perferendis sed aliquid, odio laboriosam nobis, aspernatur minima vitae officiis commodi quod voluptatem cupiditate est iusto vel fugiat unde aperiam quam exercitationem ipsum architecto suscipit. Culpa, illo. Quisquam maxime nulla expedita molestias aliquam aliquid sequi officia natus dolor magni odio veniam, repellat, voluptate ut voluptas vitae est repudiandae ipsum possimus incidunt distinctio.";
  aboutPageContainer.appendChild(aboutContentP1);

  const aboutContentP2 = document.createElement("p");
  aboutContentP2.classList.add("about-content");
  aboutContentP2.textContent =
    "Consequatur quos accusamus sed assumenda? Eos corrupti laborum doloremque dolor mollitia delectus culpa nesciunt voluptates laboriosam repellat ea, cupiditate iste, velit sed molestias quis officia voluptas nostrum quo assumenda pariatur tempora voluptatem vitae. Esse, repudiandae. Sed voluptatibus iusto amet autem eos labore repudiandae aspernatur quidem reiciendis similique, officiis repellat. Sit, exercitationem officia vel natus nulla cumque repellat optio odio quibusdam amet porro inventore aspernatur facilis. Error dolores accusamus doloribus deleniti, eos omnis iste assumenda aliquid nisi itaque laudantium cupiditate velit illo consequuntur at explicabo unde placeat tenetur incidunt modi, molestiae voluptatem iure asperiores aperiam? Dignissimos?";
  aboutPageContainer.appendChild(aboutContentP2);

  const aboutContentP3 = document.createElement("p");
  aboutContentP3.classList.add("about-content");
  aboutContentP3.textContent =
    "Aspernatur ipsum obcaecati voluptatum quis reiciendis aliquid earum, exercitationem libero ad suscipit repellendus, dolorem pariatur? Dicta quibusdam autem ratione labore corporis aliquid quis quos incidunt officiis. Debitis quasi aliquam aut? Dolor incidunt quos quisquam praesentium doloribus laudantium accusantium voluptatum nostrum ad autem quaerat eligendi aliquam at, minus, expedita nihil quasi, veniam amet ipsa nesciunt delectus deserunt? Dicta impedit similique in? Magni quasi odio saepe aut earum sapiente in? Error placeat dolores delectus, quasi distinctio enim sint molestias harum ea! Architecto quae beatae voluptas repellendus exercitationem numquam explicabo ipsum velit fuga? Quia porro laudantium eaque, itaque earum minima ducimus eius voluptatem nobis beatae fugit corporis eum, doloremque dolorem. Reiciendis neque, rem ducimus quas sit laboriosam. Rerum mollitia dolorem officiis doloremque ipsum.";
  aboutPageContainer.appendChild(aboutContentP3);

  const signature = document.createElement("p");
  signature.classList.add("signature");
  signature.textContent = "Jaques C. Mongolfier";
  aboutPageContainer.appendChild(signature);

  return aboutPageContainer;
}
