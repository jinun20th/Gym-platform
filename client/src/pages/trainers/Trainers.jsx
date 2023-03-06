import "./trainers.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Modal from "../../components/modal/Modal";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";

const Trainers = () => {
  const { user } = useContext(AuthContext);
  const { data } = useFetch("/trainer/");
  const [flag, setFlag] = useState(0);
  const [id, setId] = useState("");
  const [join, setJoin] = useState([]);
  const [gender, setGender] = useState("");
  const [specialize, setSpecialize] = useState("");
  const [sort, setSort] = useState(0);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name", "specialize", "gender"]);
  const specifieds = ["Yoga", "Cardio", "Fitness", "Aerobic", "Workout"];
  const genders = ["Nam", "Nữ"];
  const sorts = [
    {
      val: 1,
      by: "Từ A tới Z",
    },
    {
      val: 2,
      by: "Từ Z tới A",
    },
    {
      val: 3,
      by: "Theo giá tăng dần",
    },
    {
      val: 4,
      by: "Theo giá giảm dần",
    }
  ]

  function search(items) {
    return items.filter((item) => {
      if (item.specialize.includes(specialize) && gender === "") {
        return searchParam.some((newItem) => {
          return (
            item.user[0][newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        });
      }
      else if (item.specialize.includes(specialize) && item.gender === gender) {
        return searchParam.some((newItem) => {
          return (
            item.user[0][newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        });
      }
      else if (item.user[0].gender === gender && !specialize) {
        return searchParam.some((newItem) => {
          return (
            item.user[0][newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        });
      }
      else if (!specialize && !gender) {
        return searchParam.some((newItem) => {
          return (
            item.user[0][newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  const handleReset = () => {
    setQ("");
    setSpecialize("");
    setGender("");
    setSort(0);
  }

  if (join.length < data.length) {
    search(data);
  }

  const handleClick = (id) => {
    if (user) {
      setId(id);
    }
    else {
      alert('Please login first');
    }
  }
  console.log(data);
  return (
    <div>
      <Navbar />
      <div className="trainers">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="filter">
                <div className="filter-container">
                  <h1 className="filter-title">
                    TÌM KIẾM HUẤN LUYỆN VIÊN
                  </h1>
                  <div className="filter-search">
                    <div className="filter-search__item">
                      <input type="text" placeholder="Tên huấn luyện viên" className="headerSearchInput"
                        value={q} onChange={(e) => setQ(e.target.value)} />
                    </div>
                    <div className="filter-search__item">
                      <select name="specialize" id="specialize" value={specialize} onChange={(e) => { setSpecialize(e.target.value) }}>
                        <option value="">Chuyên môn</option>
                        {specifieds.map(data => {
                          return (
                            <option value={data}>{data}</option>
                          )
                        }
                        )}
                      </select>
                    </div>
                    <div className="filter-search__item">
                      <select name="gender" id="gender" value={gender} onChange={(e) => { setGender(e.target.value) }}>
                        <option value="">Giới tính</option>
                        {genders.map(data => {
                          return (
                            <option value={data}>{data}</option>
                          )
                        })}
                      </select>
                    </div>
                    <div className="filter-search__item">
                      <select name="sort" id="sort" value={sort} onChange={(e) => { setSort(e.target.value) }}>
                        <option value="0">Sắp xếp</option>
                        {sorts.map(data => {
                          return (
                            <option value={data.val} key={data.val}>{data.by}</option>
                          )
                        })}
                      </select>
                    </div>
                    <div className="filter-search__item">
                      <button className="link-btn search-btn">
                        Tìm kiếm
                      </button>
                    </div>
                    <div className="filter-search__item">
                      <button className="link-btn reset-btn" onClick={handleReset}>
                        Thiết lập lại
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <ul className="trainer-list row">
                {search(data).map((item, i) => (
                  <li className="trainer-container col-4" key={i}>
                    <img src={item.user[0].img} alt="Trainer" />
                    <Link to={item._id}>{item.user[0].name}</Link>
                    <div className="trainer-rate">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    {/* <div className="trainer-join">
                      Tham gia {join[i]}
                    </div> */}
                    {/* <div className="trainer-times">
                      <button className="btn">13:30</button>
                      <button className="btn">13:30</button>
                      <button className="btn">13:30</button>
                      <button className="btn">13:30</button>
                    </div>*/}
                    <div className="trainer-footer">
                      <Link className="btn" to={item._id}>
                        Tham gia
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="more-btn">Xem thêm</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trainers;
