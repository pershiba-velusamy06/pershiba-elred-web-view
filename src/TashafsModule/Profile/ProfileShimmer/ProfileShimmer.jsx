import React, { useEffect } from "react";
import "./profileshimmer.scss";
import Skeleton from "react-loading-skeleton";
import starLoader from "../../../assets/images/starLoader.svg";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

const ProfileShimmer = ({ color,isLoading }) => {
  return (
    <div className="profile-shimmer">
      <div className="profile-shimmer-title">Profile</div>
      <div className="wrapper">
        <div className="shimmer-user">
          <Skeleton
            circle
            height={60}
            width={60}
            className="user-img"
            baseColor={color}
          />
          <Skeleton
            width={"80%"}
            height={10}
            className="user-name"
            borderRadius={10}
            baseColor={color}
          />
          <div className="circle-name">
            <div className="icon">
              <Skeleton circle height={16} width={16} baseColor={color} />
            </div>
            <div className="location">
              <Skeleton height={8} baseColor={color} />
            </div>
          </div>
          <div className="circle-name">
            <div className="icon">
              <Skeleton circle height={16} width={16} baseColor={color} />
            </div>
            <div className="location-2">
              <Skeleton height={8} baseColor={color} />
            </div>
          </div>
        </div>
        <div className="cards">
          <Skeleton height={85} width={55} className="card" baseColor={color} />
          {/* <Skeleton height={85} width={55} className="card" baseColor={color} /> */}
        </div>
        <div className="share-shimmer">
          <Skeleton circle height={36} width={36} baseColor={color} />
          <Skeleton width={36} height={5} baseColor={color} />
        </div>
        <div className="needs-shimmer">
          <div className="top-needs">
            <Skeleton baseColor={color} height={7} width={84} />
            <Skeleton baseColor={color} height={7} width={48} />
          </div>
          <div className="cards-shimmer">
            <div className="needs-card-shimmer">
              <div className="inner-shimmer">
                <Skeleton
                  width={50}
                  height={7}
                  borderRadius={6}
                  baseColor={"#CFD4DF"}
                />
                <Skeleton
                  width={100}
                  height={7}
                  borderRadius={6}
                  baseColor={"#CFD4DF"}
                />
                <Skeleton
                  width={110}
                  height={7}
                  borderRadius={6}
                  baseColor={"#CFD4DF"}
                />

                <div style={{ lineHeight: "10px" }}>
                  <Skeleton
                    width={150}
                    height={4}
                    baseColor="#cfd4df"
                    borderRadius={6}
                  />
                </div>
                <div style={{ lineHeight: "10px" }}>
                  <Skeleton
                    width={150}
                    height={4}
                    baseColor="#cfd4df"
                    borderRadius={6}
                  />
                </div>
                <div style={{ lineHeight: "10px" }}>
                  <Skeleton
                    width={150}
                    height={4}
                    baseColor="#cfd4df"
                    borderRadius={6}
                  />
                </div>
              </div>
            </div>
            <div className="needs-card-shimmer">
              <div className="inner-shimmer">
                <Skeleton
                  width={50}
                  height={7}
                  borderRadius={6}
                  baseColor={"#CFD4DF"}
                />
                <Skeleton
                  width={100}
                  height={7}
                  borderRadius={6}
                  baseColor={"#CFD4DF"}
                />
                <Skeleton
                  width={110}
                  height={7}
                  borderRadius={6}
                  baseColor={"#CFD4DF"}
                />
                <div style={{ lineHeight: "10px" }}>
                  <Skeleton
                    width={150}
                    height={4}
                    baseColor="#cfd4df"
                    borderRadius={6}
                  />
                </div>
                <div style={{ lineHeight: "10px" }}>
                  <Skeleton
                    width={150}
                    height={4}
                    baseColor="#cfd4df"
                    borderRadius={6}
                  />
                </div>
                <div style={{ lineHeight: "10px" }}>
                  <Skeleton
                    width={150}
                    height={4}
                    baseColor="#cfd4df"
                    borderRadius={6}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ratings-shimmer">
          <div className="star-loading">
            <img src={starLoader} alt="" />
          </div>
          <Skeleton
            width={85}
            height={7}
            baseColor={color}
            className="ratings-start"
          />
          <Skeleton
            width={"80%"}
            height={7}
            baseColor={color}
            className="ratings-middle"
          />
          <Skeleton
            width={"60%"}
            height={7}
            baseColor={color}
            className="ratings-end"
          />
        </div>
        <div className="testimonials-shimmer">
          <Skeleton baseColor={color} width={100} height={7} />
          <div className="inner-card">
            <div className="right-item">
              <Skeleton
                width={120}
                height={10}
                className="first"
                baseColor="#cfd4df"
              />
            </div>
            <Skeleton
              className="middle-item"
              width={255}
              height={10}
              count={2}
              baseColor="#cfd4df"
            />
            <div className="last-item">
              <Skeleton
                circle
                width={24}
                height={24}
                className="last-circle"
                baseColor="#cfd4df"
              />
              <Skeleton
                width={110}
                height={10}
                className="last-shimmer"
                baseColor="#cfd4df"
              />
            </div>
          </div>
        </div>
        <div className="super-skills-big">
          <div>
            <Skeleton
              circle
              width={68}
              height={68}
              className="super1"
              baseColor={color}
            />
          </div>
          <div className="super-div">
            <Skeleton
              width={100}
              height={7}
              className="super2"
              baseColor={color}
            />
            <Skeleton
              width={53}
              height={7}
              className="super2"
              baseColor={color}
            />
          </div>
        </div>
        <div className="shimmer-single">
          <Skeleton baseColor="#cfd4df" width={100} height={7} />
        </div>

        <div className="i-need">
          <div className="i-need-top">
            <Skeleton height={7} width={50} baseColor={color} />
            <Skeleton height={7} width={50} baseColor={color} />
          </div>
          <div className="i-need-cards">
            <div className="card">
              <Skeleton
                height={7}
                width={64}
                borderRadius={6}
                baseColor={color}
                style={{ marginTop: "20px" }}
              />
              <Skeleton
                height={10}
                width={205}
                borderRadius={6}
                baseColor={color}
                style={{ marginTop: "20px" }}
              />
              <Skeleton
                height={10}
                width={120}
                borderRadius={6}
                baseColor={color}
                style={{ marginTop: "26px", marginBottom: "30px" }}
              />
            </div>
            <div className="card">
              <Skeleton
                height={7}
                width={64}
                borderRadius={6}
                baseColor={color}
                style={{ marginTop: "20px" }}
              />
              <Skeleton
                height={10}
                width={205}
                borderRadius={6}
                baseColor={color}
                style={{ marginTop: "20px" }}
              />
              <Skeleton
                height={10}
                width={120}
                borderRadius={6}
                baseColor={color}
                style={{ marginTop: "26px", marginBottom: "30px" }}
              />
            </div>
          </div>
        </div>
        <div className="super-skills">
          <div
            style={{ textAlign: "left", width: "100%", padding: "0 0 6px 6px" }}
          >
            <Skeleton
              baseColor={color}
              width={100}
              height={7}
              borderRadius={6}
            />
          </div>
          <div className="one-dim">
            <div>
              <Skeleton
                circle
                width={42}
                height={42}
                className="super1"
                baseColor={color}
              />
            </div>
            <div className="super-div">
              <Skeleton
                width={240}
                height={7}
                className="super2"
                baseColor={color}
              />
              <Skeleton
                width={175}
                height={7}
                className="super2"
                baseColor={color}
              />
            </div>
          </div>
          <div className="one-dim">
            <div>
              <Skeleton
                circle
                width={42}
                height={42}
                className="super1"
                baseColor={color}
              />
            </div>
            <div className="super-div">
              <Skeleton
                width={240}
                height={7}
                className="super2"
                baseColor={color}
              />
              <Skeleton
                width={175}
                height={7}
                className="super2"
                baseColor={color}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileShimmer;
