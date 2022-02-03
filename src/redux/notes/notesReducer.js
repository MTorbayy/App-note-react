import { v4 as uuidv4 } from "uuid"

const INITIAL_STATE = {
  notes: [
    {
      title: "Cuisine",
      subtitle: "Préparer un Osso buco",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe temporibus sapiente, rem nobis nostrum suscipit consectetur cum eum sed. Esse vitae fugiat delectus rerum voluptate, beatae iste molestiae optio enim, sequi architecto omnis aspernatur ipsum perspiciatis eius iure alias tempora modi obcaecati ad tenetur quos. Quod aliquam quis, quibusdam neque fuga quaerat sed laborum, esse ipsam quae, omnis libero eos!",
      id: uuidv4(),
    },
    {
      title: "Sport",
      subtitle: "Courir 10km",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi tenetur vero unde ab quas doloremque reiciendis eos a nostrum mollitia saepe, voluptatum sit ipsa maxime ipsum provident assumenda, ex quo.",
      id: uuidv4(),
    },
    {
      title: "Piano",
      subtitle: "Jouer l'Impromptu",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id totam nostrum culpa perferendis distinctio laudantium quae sed dignissimos officiis ea, enim natus commodi provident? Et quidem ad quos rem, possimus fuga voluptate quasi laboriosam, sed enim autem sapiente sunt repellat.",
      id: uuidv4(),
    },
  ],
};

export default function notesReducer(state = INITIAL_STATE, action) {
  switch(action.type) {

  }

  return state
}
