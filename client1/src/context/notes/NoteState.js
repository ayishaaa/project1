
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    "image": 
        "https://i.pinimg.com/236x/cb/00/9a/cb009a85671e4bc8a86860a2a1cfa6ed.jpg",
    "name": "John Doe",
    "content":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu odio vel enim auctor dapibus sit amet ac nisl. Aenean in nisi sed lorem tristique ullamcorper. Utpharetra, quam a vulputate aliquam, neque sem vestibulum augue, id bibendum mauris velit ac purus.",
  };
  const s2 = {
    "image":
      "https://i.pinimg.com/564x/d3/8e/58/d38e5862678dcd1aed8b1911d1d9974e.jpg",
    "name": "Margarita",
    "content":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu odio vel enim auctor dapibus sit amet ac nisl. Aenean in nisi sed lorem tristique ullamcorper. Utpharetra, quam a vulputate aliquam, neque sem vestibulum augue, id bibendumauris velit ac purus.",
  };
  const s3 = {
    "image":
      "https://i.pinimg.com/564x/41/c2/55/41c2558dca598e0f263f363f64eb0614.jpg",
    "name": "James",
    "content":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu odio vel enim auctor dapibus sit amet ac nisl. Aenean in nisi sed lorem tristique ullamcorper. Utpharetra, quam a vulputate aliquam, neque sem vestibulum augue, id bibendum mauris velit ac purus.",
  };
  const s4 = {
    "image": 
        "https://i.pinimg.com/564x/a7/d2/db/a7d2dbe6bfe6aa953831441b37ab7db3.jpg",
    "name": "Monica",
    "content":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu odio vel enim auctor dapibus sit amet ac nisl. Aenean in nisi sed lorem tristique ullamcorper. Utpharetra, quam a vulputate aliquam, neque sem vestibulum augue, id bibendum mauris velit ac purus.",
  };
  const t1 = {
    "tname": "Bun Club",
    "image": "https://i.pinimg.com/564x/d5/aa/b2/d5aab2de32fd2794b3ef78d5e676d870.jpg",
    "name1": "Harry",
    "name2": "Jack",
    "name3": "Geller",
    "name4": "Jim",
    "name5": "Sofia",
    "position": "10",
  };
  const t2 = {
    "tname": "Happy Cup",
    "image": "https://i.pinimg.com/564x/c3/14/9f/c3149f6105f9aded7580cd831e923835.jpg",
    "name1": "Mary",
    "name2": "Rosie",
    "name3": "Rachel",
    "name4": "Phoebe",
    "name5": "Tim",
    "position": "7",
  };
  const t3 = {
    "tname": "Hot Mug",
    "image": "https://i.pinimg.com/564x/71/b2/d2/71b2d2fe3ce62ba0c9094d4b92ae3033.jpg",
    "name1": "Larry",
    "name2": "Nick",
    "name3": "Hellen",
    "name4": "Kim",
    "name5": "Rofia",
    "position": "19",
  };
  const t4 = {
    "tname": "Bake Club",
    "image": "https://i.pinimg.com/564x/0c/f1/db/0cf1dbaa4d009905398d8d8abde3b7f1.jpg",
    "name1": "Jackson",
    "name2": "Micheal",
    "name3": "Felix",
    "name4": "Doe",
    "name5": "Ram",
    "position": "2",
  };
  const t5 = {
    "tname": "Choco Cake",
    "image": "https://i.pinimg.com/564x/dc/98/e2/dc98e247d0c52ea0c30bdc3dded01559.jpg",
    "name1": "Katy",
    "name2": "Charlie",
    "name3": "Clara",
    "name4": "Joseph",
    "name5": "Joey",
    "position": "5",
  };
  return (
    <NoteContext.Provider value={{s1,s2,s3,s4,t1,t2,t3,t4,t5}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

