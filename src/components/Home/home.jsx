import React, { useState, useEffect } from "react";
import { Card } from "./Cards/Card";
import Loader from "../../assets/loader";
import Modal from "./Cards/Modal";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        var response = await fetch(
          "https://api.unsplash.com/photos/random/?client_id=8K2Q4TrxZYEyrN5aM-YZYbAUcVoN4mUpAq9tz9-exmo&count=20"
        ).then((res) => res.json());

        response = response.map((data) => data.urls.small);

        setPosts(response);
        console.log("photos: ", response);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = (index) => {
    setModalIndex(index);
    setModalImage(posts[index]);
    setShowModal(true);
  };

  const previousModal = () => {
    if (modalIndex > 0) {
      setModalIndex((index) => index - 1);
      setModalImage(posts[modalIndex]);
    }
  };
  const nextModal = () => {
    if (modalIndex < posts.length - 1) {
      setModalIndex((index) => index + 1);
      setModalImage(posts[modalIndex]);
    }
  };

  return (
    <div>
      {showModal && (
        <Modal
          modalImage={modalImage}
          showModal={showModal}
          openModal={openModal}
          closeModal={closeModal}
          nextModal={nextModal}
          previousModal={previousModal}
        />
      )}

      <div>
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="grid ml-4 mr-4 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4">
            {posts.length == 0 ? (
              <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">No Photos</h2>
            ) : (
              posts.map((post, index) => (
                <Card
                  className="max-w-sm"
                  openModal={openModal}
                  key={index}
                  img={post}
                  index={index}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
