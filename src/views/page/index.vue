<template>

  <div id="app">

    <body>


      <Header></Header>



      <!-- **************** MAIN CONTENT START **************** -->
      <main>
        <!-- Container START  class="row g-4" -->
        <div class="container">
          <div class="containerrow">
            <!-- Sidenav START -->
            <div class="sidebar-left" style="width: 303px">
              <!-- Advanced filter responsive toggler START -->
              <!-- 删除侧边栏折叠后样式 -->
              <!-- Advanced filter responsive toggler END -->

              <!-- Navbar START-->
              <nav class="navbar navbar-expand-sm mx-0">
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasSideNavbar">
                  <!-- Offcanvas header -->
                  <div class="offcanvas-header">
                    <button type="button" class="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas"
                      aria-label="Close"></button>
                  </div>

                  <!-- Offcanvas body -->
                  <div class="offcanvas-body d-block px-2 px-lg-0">
                    <!-- Card START -->
                    <div class="card overflow-hidden">
                      <!-- Cover image -->
                      <div class="h-50px" style="
                        background-image: url(assets/images/bg/01.jpg);
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                      "></div>
                      <!-- Card body START -->
                      <div class="card-body pt-0">
                        <div class="text-center">
                          <!-- Avatar   assets/images/avatar/07.jpg  -->
                          <div class="avatar avatar-lg mt-n5 mb-3">
                            <a href="#!"><img class="avatar-img rounded border border-white border-3"
                                v-bind:src="'https://springbootacc.oss-cn-chengdu.aliyuncs.com/touxiang/' + loginUserInfo.portraitImage"
                                alt="" /></a>
                          </div>
                          <!-- Info -->
                          <h5 class="mb-0"><a href="#!">{{ loginUserInfo.nickname }}</a></h5>
                          <small>{{ loginUserInfo.userId }}</small>
                          <p class="mt-3">
                            {{ loginUserInfo.phone }}
                          </p>

                          <!-- User stat START -->
                          <div class="hstack gap-2 gap-xl-3 justify-content-center">
                            <!-- User stat item -->
                            <div>
                              <h6 class="mb-0">0</h6>
                              <small>发布</small>
                            </div>
                            <!-- Divider -->
                            <div class="vr"></div>
                            <!-- User stat item -->
                            <div>
                              <h6 class="mb-0">0</h6>
                              <small>粉丝</small>
                            </div>
                            <!-- Divider -->
                            <div class="vr"></div>
                            <!-- User stat item -->
                            <div>
                              <h6 class="mb-0">0</h6>
                              <small>关注</small>
                            </div>
                          </div>
                          <!-- User stat END -->
                        </div>

                        <!-- Divider -->
                        <hr />

                        <!-- Side Nav START -->
                        <ul class="nav nav-link-secondary flex-column fw-bold gap-2">
                          <li class="nav-item">
                            <a class="nav-link" href="my-profile.html">
                              <img class="me-2 h-20px fa-fw" src="@/assets/images/icon/home-outline-filled.svg"
                                alt="" /><span>动态</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="my-profile-connections.html">
                              <img class="me-2 h-20px fa-fw" src="@/assets/images/icon/person-outline-filled.svg"
                                alt="" /><span>联系</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="blog.html">
                              <img class="me-2 h-20px fa-fw" src="@/assets/images/icon/earth-outline-filled.svg"
                                alt="" /><span>最新消息</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="events.html">
                              <img class="me-2 h-20px fa-fw" src="@/assets/images/icon/calendar-outline-filled.svg"
                                alt="" /><span>事件 </span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="groups.html">
                              <img class="me-2 h-20px fa-fw" src="@/assets/images/icon/chat-outline-filled.svg"
                                alt="" /><span>群组</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="notifications.html">
                              <img class="me-2 h-20px fa-fw" src="@/assets/images/icon/notification-outlined-filled.svg"
                                alt="" /><span>通知</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="settings.html">
                              <img class="me-2 h-20px fa-fw" src="@/assets/images/icon/cog-outline-filled.svg"
                                alt="" /><span>设置</span></a>
                          </li>
                        </ul>
                        <!-- Side Nav END -->
                      </div>
                      <!-- Card body END -->
                      <!-- Card footer -->
                      <div class="card-footer text-center py-2">
                        <a class="btn btn-link btn-sm" href="my-profile.html">个人主页
                        </a>
                      </div>
                    </div>
                    <!-- Card END -->

                    <!-- Helper link START -->
                    <ul class="nav small mt-4 justify-content-center lh-1">
                      <li class="nav-item">
                        <a class="nav-link" href="my-profile-about.html">About</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="settings.html">Settings</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="http://www.bootstrapmb.comlogin">Support
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="">Docs </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="help.html">Help</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="privacy-and-terms.html">Privacy & terms</a>
                      </li>
                    </ul>
                    <!-- Helper link END -->
                    <!-- Copyright -->
                    <p class="small text-center mt-1">
                      ©2022
                      <a class="text-body" href="http://www.kekechat.com/">
                        kekechat
                      </a>
                    </p>
                  </div>
                </div>
              </nav>
              <!-- Navbar END-->
            </div>
            <!-- Sidenav END -->

            <!-- Main content START   col-md-8 col-lg-6 vstack gap-4  -->
            <div id="scrollable-div" class="disablescrollc main-content" style="width: 572px">
              <!-- Share feed START -->
              <div class="card card-body">
                <div class="d-flex mb-3">
                  <!-- Avatar -->
                  <div class="avatar avatar-xs me-2">
                    <a href="#">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/placeholder.jpg" alt="" />
                    </a>
                  </div>
                  <!-- Post input -->
                  <form class="w-100">
                    <textarea class="form-control pe-4 border-0" rows="2" data-autoresize
                      placeholder="分享你的想法..."></textarea>
                  </form>
                </div>
                <!-- Share feed toolbar START -->
                <ul class="nav nav-pills nav-stack small fw-normal">
                  <li class="nav-item">
                    <a class="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal"
                      data-bs-target="#feedActionPhoto">
                      <i class="bi bi-image-fill text-success pe-2"></i>图片</a>
                  </li>
                  <li class="nav-item" onclick="clearSelectFile()">
                    <a class="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal"
                      data-bs-target="#feedActionVideo">
                      <i class="bi bi-camera-reels-fill text-info pe-2"></i>视频</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link bg-light py-1 px-2 mb-0" data-bs-toggle="modal"
                      data-bs-target="#modalCreateEvents">
                      <i class="bi bi-calendar2-event-fill text-danger pe-2"></i>事件
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal"
                      data-bs-target="#modalCreateFeed">
                      <i class="bi bi-emoji-smile-fill text-warning pe-2"></i>日常活动</a>
                  </li>

                </ul>
                <!-- Share feed toolbar END -->
              </div>
              <!-- Share feed END -->

              <!-- 获取videolist测试功能按钮 -->
              <!-- <button type="button" @click="getVideoList">获取videolist</button> -->

              <!-- Card feed item START 22222222222-->
              <div class="card" v-for="item in videoList">
                <!-- Card header START -->
                <div class="card-header border-0 pb-0">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                      <!-- Avatar -->
                      <div class="avatar avatar-story me-2">
                        <a href="#!">
                          <img class="avatar-img rounded-circle" src="@/assets/images/avatar/12.jpg" alt="" />
                        </a>
                      </div>
                      <!-- Info -->
                      <div>
                        <div class="nav nav-divider">
                          <h6 class="nav-item card-title mb-0">
                            <a href="#!"> 用户axsus </a>
                          </h6>
                          <span class="nav-item small"> {{ computedDayNum(item.uploadTime) }}天</span>
                        </div>
                        <p class="mb-0 small">{{ item.uploadTime }}</p>
                      </div>
                    </div>
                    <!-- Card feed action dropdown START -->
                    <div class="dropdown">
                      <a href="#" class="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction2"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-three-dots"></i>
                      </a>
                      <!-- Card feed action dropdown menu -->
                      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction2">

                        <li>
                          <a class="dropdown-item" href="#">
                            <i class="bi bi-person-x fa-fw pe-2"></i>关注用户
                          </a>
                        </li>

                        <li>
                          <a class="dropdown-item" href="#">
                            <i class="bi bi-slash-circle fa-fw pe-2"></i>屏蔽</a>
                        </li>

                        <li>
                          <a class="dropdown-item" href="#">
                            <i class="bi bi-flag fa-fw pe-2"></i>举报内容</a>
                        </li>
                      </ul>
                    </div>
                    <!-- Card feed action dropdown END -->
                  </div>
                </div>
                <!-- Card header END -->

                <!-- Card body START -->
                <div class="card-body pb-0">
                  <p>
                    {{ item.title }}
                    <!-- <a href="#!">#internship</a> <a href="#!">#hiring</a>
                <a href="#!">#apply</a> -->
                  </p>
                </div>
                <!-- Card img -->
                <div class=" video-container overflow-hidden fullscreen-video w-100">
                  <video class="video" :src="item.videoUrl" controls
                    style="width: auto; height: 500px; margin: auto"></video>


                </div>
                <!-- Feed react START -->
                <div class="card-body pt-0">
                  <ul class="nav nav-stack py-3 small">
                    <li class="nav-item">
                      <a class="nav-link " :id="'likeEle' + item.id" @click="incLikeNum(item.id)" href="#!">
                        <i class="bi bi-hand-thumbs-up-fill pe-1"></i>点赞
                        ({{ item.starNum }})</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="javascript:void(0)" @click="showVideoComment(item.id)">
                        <i class="bi bi-chat-fill pe-1"></i>评论 (12)</a>
                    </li>

                  </ul>
                  <!-- Feed react END -->

                  <!-- Add comment -->
                  <div class="d-flex mb-3">
                    <!-- Avatar -->
                    <div class="avatar avatar-xs me-2">
                      <a href="#!">
                        <img class="avatar-img rounded-circle" src="@/assets/images/avatar/12.jpg" alt="" />
                      </a>
                    </div>
                    <!-- Comment box  -->
                    <!-- Comment box  -->

                    <!-- <form class="position-relative w-100">
                <textarea data-autoresize class="form-control pe-4 bg-light" rows="1"
                  placeholder="评论"></textarea>                 
              
              </form> -->

                    <div class="input-group">
                      <input v-model="comment" type="text" class="form-control" placeholder="你的评论"
                        aria-label="Recipient's username" aria-describedby="button-addon2" />
                      <button @click="submitComment(item.id)" class="btn btn-outline-secondary" type="button"
                        id="button-addon2">
                        发送
                      </button>
                    </div>
                  </div>
                  <div :id="item.id" style="display: block">
                    <div v-for="(commentItem, key) in commentList" :key="key">
                      <!-- Comment wrap START -->

                      <!-- displayComment渲染ul失效 后面添加style -->

                      <ul class=" comment-wrap list-unstyled mb-0 displayComment " v-if="key == item.id"
                        style="height: 350px; overflow: auto;">
                        <!-- Comment item START -->
                        <li class="comment-item" v-for="(comment, key) in commentItem">
                          <div class="d-flex">
                            <!-- Avatar -->
                            <div class="avatar avatar-xs">
                              <a href="#!"><img class="avatar-img rounded-circle" src="@/assets/images/avatar/05.jpg"
                                  alt="" /></a>
                            </div>
                            <div class="ms-2">
                              <!-- Comment by  contentId  // {{commentItem[1][0].comment}}  -->
                              <div class="bg-light rounded-start-top-0 p-2 rounded">
                                <div class="d-flex justify-content-between">
                                  <h6 class="mb-1">
                                    <a href="#!"> 用户3434kssa </a>
                                  </h6>

                                </div>
                                <!-- 测试数据{{item.id}}{{comment.contentId}} -->
                                <p class="small mb-0">{{ comment.comment }}</p>
                              </div>
                              <!-- Comment react -->
                              <ul class="nav nav-divider py-1 small">
                                <li class="nav-item">
                                  <a class="nav-link" href="#!"> 赞 (3)</a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="#!"> 回复</a>
                                </li>

                              </ul>
                            </div>
                          </div>
                          <!-- Comment item nested START -->
                          <!-- 回复评论功能 -->
                          <ul class="comment-item-nested list-unstyled" style="display: none">
                            <!-- Comment item START -->
                            <li class="comment-item">
                              <div class="d-flex">
                                <!-- Avatar -->
                                <div class="avatar avatar-xs">
                                  <a href="#!"><img class="avatar-img rounded-circle"
                                      src="@/assets/images/avatar/06.jpg" alt="" /></a>
                                </div>
                                <!-- Comment by -->
                                <div class="ms-2">
                                  <div class="bg-light p-3 rounded">
                                    <div class="d-flex justify-content-between">
                                      <h6 class="mb-1">
                                        <a href="#!"> Lori Stevens </a>
                                      </h6>
                                      <small class="ms-2">2hr</small>
                                    </div>
                                    <p class="small mb-0">
                                      Dependent on so extremely delivered by.
                                      Yet ﻿no jokes worse her why.
                                    </p>
                                  </div>
                                  <!-- Comment react -->
                                  <ul class="nav nav-divider py-2 small">
                                    <li class="nav-item">
                                      <a class="nav-link" href="#!">
                                        Like (5)</a>
                                    </li>
                                    <li class="nav-item">
                                      <a class="nav-link" href="#!"> Reply</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                            <!-- Comment item END -->
                          </ul>
                          <!-- Comment item nested END -->
                        </li>
                        <!-- Comment item END -->
                      </ul>

                      <!-- Comment wrap END -->
                    </div>
                  </div>
                </div>
                <!-- Card body END -->
                <!-- Card footer START -->
                <div class="card-footer p-1">
                  <!-- Load more comments -->
                  <a href="" @click="getVideoComment" role="button"
                    class="btn btn-light p-0 d-flex justify-content-center align-items-center">
                    <span class="">加载更多评论</span>
                  </a>
                </div>
                <!-- Card footer END -->
              </div>
              <!-- Card feed item END 2222222222-->

              <!-- 加载更多自定义 -->
              <button @click="getVideoList" class="btn btn-outline-secondary w-100 mt-2" type="button">
                <span>加载更多</span>
              </button>

              <!-- 请求数据时，使用这个样式 btn btn-primary invisible -->
              <button @click="getVideoList" class="btn btn-primary w-100 invisible " type="button">
                <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span role="status">加载更多</span>
              </button>

              <!-- Load more button START -->
              <!-- <a href="#!" @click="getVideoList" role="button" class="btn btn-loader " data-bs-toggle="button"
          aria-pressed="true">
          <span class="load-text"> 1111111Load more </span>
          <div class="load-icon">
            <div class="spinner-grow spinner-grow-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </a> -->
              <!-- Load more button END -->
            </div>
            <!-- Main content END -->



            <!-- Right sidebar START -->
            <div class="sidebar-right" style="width: 303px">
              <div class="row g-4">
                <!-- Card follow START -->
                <div class="col-lg-12">
                  <div class="card">
                    <!-- Card header START -->
                    <div class="card-header pb-0 border-0">
                      <h5 class="card-title mb-0">推荐关注</h5>
                    </div>
                    <!-- Card header END -->
                    <!-- Card body START -->
                    <div class="card-body">
                      <!-- Connection item START -->
                      <div class="hstack gap-2 mb-3" v-for="recommendUserItem in recommendUser">
                        <!-- Avatar -->
                        <div class="avatar">
                          <a href="#!"><img class="avatar-img rounded-circle"
                              v-bind:src="'https://springbootacc.oss-cn-chengdu.aliyuncs.com/touxiang/' + recommendUserItem.portraitImage"
                              alt="" /></a>
                        </div>
                        <!-- Title -->
                        <div class="overflow-hidden">
                          <a class="h6 mb-0" href="#!">{{ recommendUserItem.nickname }}</a>
                          <p class="mb-0 small text-truncate">{{ recommendUserItem.userId }}</p>
                        </div>
                        <!-- Button -->
                        <a class="btn btn-primary-soft rounded-circle icon-md ms-auto"
                          @click="addFollowUser(recommendUserItem.userId)"><i class="fa-solid fa-plus"> </i></a>
                      </div>
                      <!-- Connection item END -->


                      <!-- View more button -->
                      <div class="d-grid mt-3">
                        <a class="btn btn-sm btn-primary-soft" href="#!">查看更多</a>
                      </div>
                    </div>
                    <!-- Card body END -->
                  </div>
                </div>
                <!-- Card follow START -->

                <!-- Card News START -->
                <div class="col-lg-12">
                  <div class="card">
                    <!-- Card header START -->
                    <div class="card-header pb-0 border-0">
                      <h5 class="card-title mb-0">今天消息</h5>
                    </div>
                    <!-- Card header END -->
                    <!-- Card body START -->
                    <div class="card-body">

                      <!-- News item -->
                      <div class="mb-3">
                        <h6 class="mb-0">
                          <a href="blog-details.html">热点消息</a>
                        </h6>
                        <small>4hr</small>
                      </div>
                      <!-- News item -->
                      <div class="mb-3">
                        <h6 class="mb-0">
                          <a href="blog-details.html">热点消息</a>
                        </h6>
                        <small>6hr</small>
                      </div>


                    </div>
                    <!-- Card body END -->
                  </div>
                </div>

                <!-- Card News END -->





              </div>
            </div>
            <!-- Right sidebar END -->
          </div>
          <!-- Row END -->
        </div>
        <!-- Container END -->
      </main>
      <!-- **************** MAIN CONTENT END **************** -->




      <!-- Main Chat START -->
      <div class="d-none d-lg-block">
        <!-- Button -->
        <a class="icon-md btn btn-primary position-fixed end-0 bottom-0 me-5 mb-5" data-bs-toggle="offcanvas"
          href="#offcanvasChat" role="button" aria-controls="offcanvasChat">
          <i class="bi bi-chat-left-text-fill"></i>
        </a>
        <!-- Chat sidebar START -->
        <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
          id="offcanvasChat">
          <!-- Offcanvas header -->
          <div class="offcanvas-header d-flex justify-content-between">
            <h5 class="offcanvas-title">Messaging</h5>
            <div class="d-flex">
              <!-- New chat box open button -->
              <a href="#" class="btn btn-secondary-soft-hover py-1 px-2">
                <i class="bi bi-pencil-square"></i>
              </a>
              <!-- Chat action START -->
              <div class="dropdown">
                <a href="#" class="btn btn-secondary-soft-hover py-1 px-2" id="chatAction" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <i class="bi bi-three-dots"></i>
                </a>
                <!-- Chat action menu -->
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="chatAction">
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-check-square fa-fw pe-2"></i>Mark all as
                      read</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-gear fa-fw pe-2"></i>Chat setting
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-bell fa-fw pe-2"></i>Disable
                      notifications</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-volume-up-fill fa-fw pe-2"></i>Message
                      sounds</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-slash-circle fa-fw pe-2"></i>Block
                      setting</a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-people fa-fw pe-2"></i>Create a group
                      chat</a>
                  </li>
                </ul>
              </div>
              <!-- Chat action END -->

              <!-- Close  -->
              <a href="#" class="btn btn-secondary-soft-hover py-1 px-2" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="fa-solid fa-xmark"></i>
              </a>
            </div>
          </div>
          <!-- Offcanvas body START -->
          <div class="offcanvas-body pt-0 custom-scrollbar">
            <!-- Search contact START -->
            <form class="rounded position-relative">
              <input class="form-control ps-5 bg-light" type="search" placeholder="Search..." aria-label="Search" />
              <button class="btn bg-transparent px-3 py-0 position-absolute top-50 start-0 translate-middle-y"
                type="submit">
                <i class="bi bi-search fs-5"> </i>
              </button>
            </form>
            <!-- Search contact END -->
            <ul class="list-unstyled">
              <!-- Contact item -->
              <li class="mt-3 hstack gap-3 align-items-center position-relative toast-btn" data-target="chatToast">
                <!-- Avatar -->
                <div class="avatar status-online">
                  <img class="avatar-img rounded-circle" src="@/assets/images/avatar/01.jpg" alt="" />
                </div>
                <!-- Info -->
                <div class="overflow-hidden">
                  <a class="h6 mb-0 stretched-link" href="#!">Frances Guerrero
                  </a>
                  <div class="small text-secondary text-truncate">
                    Frances sent a photo.
                  </div>
                </div>
                <!-- Chat time -->
                <div class="small ms-auto text-nowrap">Just now</div>
              </li>

              <!-- Contact item -->
              <li class="mt-3 hstack gap-3 align-items-center position-relative toast-btn" data-target="chatToast2">
                <!-- Avatar -->
                <div class="avatar status-online">
                  <img class="avatar-img rounded-circle" src="@/assets/images/avatar/02.jpg" alt="" />
                </div>
                <!-- Info -->
                <div class="overflow-hidden">
                  <a class="h6 mb-0 stretched-link" href="#!">Lori Ferguson </a>
                  <div class="small text-secondary text-truncate">
                    You missed a call form Carolyn🤙
                  </div>
                </div>
                <!-- Chat time -->
                <div class="small ms-auto text-nowrap">1min</div>
              </li>

              <!-- Contact item -->
              <li class="mt-3 hstack gap-3 align-items-center position-relative">
                <!-- Avatar -->
                <div class="avatar status-offline">
                  <img class="avatar-img rounded-circle" src="@/assets/images/avatar/placeholder.jpg" alt="" />
                </div>
                <!-- Info -->
                <div class="overflow-hidden">
                  <a class="h6 mb-0 stretched-link" href="#!">Samuel Bishop </a>
                  <div class="small text-secondary text-truncate">
                    Day sweetness why cordially 😊
                  </div>
                </div>
                <!-- Chat time -->
                <div class="small ms-auto text-nowrap">2min</div>
              </li>

              <!-- Contact item -->
              <li class="mt-3 hstack gap-3 align-items-center position-relative">
                <!-- Avatar -->
                <div class="avatar">
                  <img class="avatar-img rounded-circle" src="@/assets/images/avatar/04.jpg" alt="" />
                </div>
                <!-- Info -->
                <div class="overflow-hidden">
                  <a class="h6 mb-0 stretched-link" href="#!">Dennis Barrett
                  </a>
                  <div class="small text-secondary text-truncate">
                    Happy birthday🎂
                  </div>
                </div>
                <!-- Chat time -->
                <div class="small ms-auto text-nowrap">10min</div>
              </li>

              <!-- Contact item -->
              <li class="mt-3 hstack gap-3 align-items-center position-relative">
                <!-- Avatar -->
                <div class="avatar avatar-story status-online">
                  <img class="avatar-img rounded-circle" src="@/assets/images/avatar/05.jpg" alt="" />
                </div>
                <!-- Info -->
                <div class="overflow-hidden">
                  <a class="h6 mb-0 stretched-link" href="#!">Judy Nguyen </a>
                  <div class="small text-secondary text-truncate">
                    Thank you!
                  </div>
                </div>
                <!-- Chat time -->
                <div class="small ms-auto text-nowrap">2hrs</div>
              </li>

              <!-- Contact item -->
              <li class="mt-3 hstack gap-3 align-items-center position-relative">
                <!-- Avatar -->
                <div class="avatar status-online">
                  <img class="avatar-img rounded-circle" src="@/assets/images/avatar/06.jpg" alt="" />
                </div>
                <!-- Info -->
                <div class="overflow-hidden">
                  <a class="h6 mb-0 stretched-link" href="#!">Carolyn Ortiz </a>
                  <div class="small text-secondary text-truncate">
                    Greetings from Webestica.
                  </div>
                </div>
                <!-- Chat time -->
                <div class="small ms-auto text-nowrap">1 day</div>
              </li>

              <!-- Contact item -->
              <li class="mt-3 hstack gap-3 align-items-center position-relative">
                <!-- Avatar -->
                <div class="flex-shrink-0 avatar">
                  <ul class="avatar-group avatar-group-four">
                    <li class="avatar avatar-xxs">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/06.jpg" alt="avatar" />
                    </li>
                    <li class="avatar avatar-xxs">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/07.jpg" alt="avatar" />
                    </li>
                    <li class="avatar avatar-xxs">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/08.jpg" alt="avatar" />
                    </li>
                    <li class="avatar avatar-xxs">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/07.jpg" alt="avatar" />
                    </li>
                  </ul>
                </div>
                <!-- Info -->
                <div class="overflow-hidden">
                  <a class="h6 mb-0 stretched-link text-truncate d-inline-block" href="#!">Frances, Lori, Amanda, Lawson
                  </a>
                  <div class="small text-secondary text-truncate">
                    Btw are you looking for job change?
                  </div>
                </div>
                <!-- Chat time -->
                <div class="small ms-auto text-nowrap">4 day</div>
              </li>

              <!-- Contact item -->
              <li class="mt-3 hstack gap-3 align-items-center position-relative">
                <!-- Avatar -->
                <div class="avatar status-offline">
                  <img class="avatar-img rounded-circle" src="@/assets/images/avatar/08.jpg" alt="" />
                </div>
                <!-- Info -->
                <div class="overflow-hidden">
                  <a class="h6 mb-0 stretched-link" href="#!">Bryan Knight </a>
                  <div class="small text-secondary text-truncate">
                    if you are available to discuss🙄
                  </div>
                </div>
                <!-- Chat time -->
                <div class="small ms-auto text-nowrap">6 day</div>
              </li>

              <!-- Contact item -->
              <li class="mt-3 hstack gap-3 align-items-center position-relative">
                <!-- Avatar -->
                <div class="avatar">
                  <img class="avatar-img rounded-circle" src="@/assets/images/avatar/07.jpg" alt="" />
                </div>
                <!-- Info -->
                <div class="overflow-hidden">
                  <a class="h6 mb-0 stretched-link" href="#!">Louis Crawford
                  </a>
                  <div class="small text-secondary text-truncate">
                    🙌Congrats on your work anniversary!
                  </div>
                </div>
                <!-- Chat time -->
                <div class="small ms-auto text-nowrap">1 day</div>
              </li>

              <!-- Contact item -->
              <li class="mt-3 hstack gap-3 align-items-center position-relative">
                <!-- Avatar -->
                <div class="avatar status-online">
                  <img class="avatar-img rounded-circle" src="@/assets/images/avatar/10.jpg" alt="" />
                </div>
                <!-- Info -->
                <div class="overflow-hidden">
                  <a class="h6 mb-0 stretched-link" href="#!">Jacqueline Miller
                  </a>
                  <div class="small text-secondary text-truncate">
                    No sorry, Thanks.
                  </div>
                </div>
                <!-- Chat time -->
                <div class="small ms-auto text-nowrap">15, dec</div>
              </li>

              <!-- Contact item -->
              <li class="mt-3 hstack gap-3 align-items-center position-relative">
                <!-- Avatar -->
                <div class="avatar">
                  <img class="avatar-img rounded-circle" src="@/assets/images/avatar/11.jpg" alt="" />
                </div>
                <!-- Info -->
                <div class="overflow-hidden">
                  <a class="h6 mb-0 stretched-link" href="#!">Amanda Reed </a>
                  <div class="small text-secondary text-truncate">
                    Interested can share CV at.
                  </div>
                </div>
                <!-- Chat time -->
                <div class="small ms-auto text-nowrap">18, dec</div>
              </li>

              <!-- Contact item -->
              <li class="mt-3 hstack gap-3 align-items-center position-relative">
                <!-- Avatar -->
                <div class="avatar status-online">
                  <img class="avatar-img rounded-circle" src="@/assets/images/avatar/12.jpg" alt="" />
                </div>
                <!-- Info -->
                <div class="overflow-hidden">
                  <a class="h6 mb-0 stretched-link" href="#!">Larry Lawson </a>
                  <div class="small text-secondary text-truncate">
                    Hope you're doing well and Safe.
                  </div>
                </div>
                <!-- Chat time -->
                <div class="small ms-auto text-nowrap">20, dec</div>
              </li>
              <!-- Button -->
              <li class="mt-3 d-grid">
                <a class="btn btn-primary-soft" href="messaging.html">
                  See all in messaging
                </a>
              </li>
            </ul>
          </div>
          <!-- Offcanvas body END -->
        </div>
        <!-- Chat sidebar END -->

        <!-- Chat END -->

        <!-- Chat START -->
        <div aria-live="polite" aria-atomic="true" class="position-relative">
          <div class="toast-container toast-chat d-flex gap-3 align-items-end">
            <!-- Chat toast START -->
            <div id="chatToast" class="toast mb-0 bg-mode" role="alert" aria-live="assertive" aria-atomic="true"
              data-bs-autohide="false">
              <div class="toast-header bg-mode">
                <!-- Top avatar and status START -->
                <div class="d-flex justify-content-between align-items-center w-100">
                  <div class="d-flex">
                    <div class="flex-shrink-0 avatar me-2">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/01.jpg" alt="" />
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="mb-0 mt-1">Frances Guerrero</h6>
                      <div class="small text-secondary">
                        <i class="fa-solid fa-circle text-success me-1"></i>Online
                      </div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <!-- Call button -->
                    <div class="dropdown">
                      <a class="btn btn-secondary-soft-hover py-1 px-2" href="#" id="chatcoversationDropdown"
                        data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i
                          class="bi bi-three-dots-vertical"></i></a>
                      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown">
                        <li>
                          <a class="dropdown-item" href="#"><i class="bi bi-camera-video me-2 fw-icon"></i>Video
                            call</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"><i class="bi bi-telephone me-2 fw-icon"></i>Audio
                            call</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"><i class="bi bi-trash me-2 fw-icon"></i>Delete
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"><i class="bi bi-chat-square-text me-2 fw-icon"></i>Mark as
                            unread</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"><i class="bi bi-volume-up me-2 fw-icon"></i>Muted</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"><i class="bi bi-archive me-2 fw-icon"></i>Archive</a>
                        </li>
                        <li class="dropdown-divider"></li>
                        <li>
                          <a class="dropdown-item" href="#"><i class="bi bi-flag me-2 fw-icon"></i>Report</a>
                        </li>
                      </ul>
                    </div>
                    <!-- Card action END -->
                    <a class="btn btn-secondary-soft-hover py-1 px-2" data-bs-toggle="collapse" href="#collapseChat"
                      aria-expanded="false" aria-controls="collapseChat"><i class="bi bi-dash-lg"></i></a>
                    <button class="btn btn-secondary-soft-hover py-1 px-2" data-bs-dismiss="toast" aria-label="Close">
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
                <!-- Top avatar and status END -->
              </div>
              <div class="toast-body collapse show" id="collapseChat">
                <!-- Chat conversation START -->
                <div class="chat-conversation-content custom-scrollbar h-200px">
                  <!-- Chat time -->
                  <div class="text-center small my-2">
                    Jul 16, 2022, 06:15 am
                  </div>
                  <!-- Chat message left -->
                  <div class="d-flex mb-1">
                    <div class="flex-shrink-0 avatar avatar-xs me-2">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/01.jpg" alt="" />
                    </div>
                    <div class="flex-grow-1">
                      <div class="w-100">
                        <div class="d-flex flex-column align-items-start">
                          <div class="bg-light text-secondary p-2 px-3 rounded-2">
                            Applauded no discovery😊
                          </div>
                          <div class="small my-2">6:15 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Chat message right -->
                  <div class="d-flex justify-content-end text-end mb-1">
                    <div class="w-100">
                      <div class="d-flex flex-column align-items-end">
                        <div class="bg-primary text-white p-2 px-3 rounded-2">
                          With pleasure
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Chat message left -->
                  <div class="d-flex mb-1">
                    <div class="flex-shrink-0 avatar avatar-xs me-2">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/01.jpg" alt="" />
                    </div>
                    <div class="flex-grow-1">
                      <div class="w-100">
                        <div class="d-flex flex-column align-items-start">
                          <div class="bg-light text-secondary p-2 px-3 rounded-2">
                            Please find the attached
                          </div>
                          <!-- Files START -->
                          <!-- Files END -->
                          <div class="small my-2">12:16 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Chat message left -->
                  <div class="d-flex mb-1">
                    <div class="flex-shrink-0 avatar avatar-xs me-2">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/01.jpg" alt="" />
                    </div>
                    <div class="flex-grow-1">
                      <div class="w-100">
                        <div class="d-flex flex-column align-items-start">
                          <div class="bg-light text-secondary p-2 px-3 rounded-2">
                            How promotion excellent curiosity😮
                          </div>
                          <div class="small my-2">3:22 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Chat message right -->
                  <div class="d-flex justify-content-end text-end mb-1">
                    <div class="w-100">
                      <div class="d-flex flex-column align-items-end">
                        <div class="bg-primary text-white p-2 px-3 rounded-2">
                          And sir dare view.
                        </div>
                        <!-- Images -->
                        <div class="d-flex my-2">
                          <div class="small text-secondary">5:35 PM</div>
                          <div class="small ms-2">
                            <i class="fa-solid fa-check"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Chat time -->
                  <div class="text-center small my-2">2 New Messages</div>
                  <!-- Chat Typing -->
                  <div class="d-flex mb-1">
                    <div class="flex-shrink-0 avatar avatar-xs me-2">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/01.jpg" alt="" />
                    </div>
                    <div class="flex-grow-1">
                      <div class="w-100">
                        <div class="d-flex flex-column align-items-start">
                          <div class="bg-light text-secondary p-3 rounded-2">
                            <div class="typing d-flex align-items-center">
                              <div class="dot"></div>
                              <div class="dot"></div>
                              <div class="dot"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Chat conversation END -->
                <!-- Chat bottom START -->
                <div class="mt-2">
                  <!-- Chat textarea -->
                  <textarea class="form-control mb-sm-0 mb-3" placeholder="Type a message" rows="1"></textarea>
                  <!-- Button -->
                  <div class="d-sm-flex align-items-end mt-2">
                    <button class="btn btn-sm btn-danger-soft me-2">
                      <i class="fa-solid fa-face-smile fs-6"></i>
                    </button>
                    <button class="btn btn-sm btn-secondary-soft me-2">
                      <i class="fa-solid fa-paperclip fs-6"></i>
                    </button>
                    <button class="btn btn-sm btn-success-soft me-2">
                      Gif
                    </button>
                    <button class="btn btn-sm btn-primary ms-auto">Send</button>
                  </div>
                </div>
                <!-- Chat bottom START -->
              </div>
            </div>
            <!-- Chat toast END -->

            <!-- Chat toast 2 START -->
            <div id="chatToast2" class="toast mb-0 bg-mode" role="alert" aria-live="assertive" aria-atomic="true"
              data-bs-autohide="false">
              <div class="toast-header bg-mode">
                <!-- Top avatar and status START -->
                <div class="d-flex justify-content-between align-items-center w-100">
                  <div class="d-flex">
                    <div class="flex-shrink-0 avatar me-2">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/02.jpg" alt="" />
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="mb-0 mt-1">Lori Ferguson</h6>
                      <div class="small text-secondary">
                        <i class="fa-solid fa-circle text-success me-1"></i>Online
                      </div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <!-- Call button -->
                    <div class="dropdown">
                      <a class="btn btn-secondary-soft-hover py-1 px-2" href="#" id="chatcoversationDropdown2"
                        role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i
                          class="bi bi-three-dots-vertical"></i></a>
                      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown2">
                        <li>
                          <a class="dropdown-item" href="#"><i class="bi bi-camera-video me-2 fw-icon"></i>Video
                            call</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"><i class="bi bi-telephone me-2 fw-icon"></i>Audio
                            call</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"><i class="bi bi-trash me-2 fw-icon"></i>Delete
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"><i class="bi bi-chat-square-text me-2 fw-icon"></i>Mark as
                            unread</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"><i class="bi bi-volume-up me-2 fw-icon"></i>Muted</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"><i class="bi bi-archive me-2 fw-icon"></i>Archive</a>
                        </li>
                        <li class="dropdown-divider"></li>
                        <li>
                          <a class="dropdown-item" href="#"><i class="bi bi-flag me-2 fw-icon"></i>Report</a>
                        </li>
                      </ul>
                    </div>
                    <!-- Card action END -->
                    <a class="btn btn-secondary-soft-hover py-1 px-2" data-bs-toggle="collapse" href="#collapseChat2"
                      role="button" aria-expanded="false" aria-controls="collapseChat2"><i
                        class="bi bi-dash-lg"></i></a>
                    <button class="btn btn-secondary-soft-hover py-1 px-2" data-bs-dismiss="toast" aria-label="Close">
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
                <!-- Top avatar and status END -->
              </div>
              <div class="toast-body collapse show" id="collapseChat2">
                <!-- Chat conversation START -->
                <div class="chat-conversation-content custom-scrollbar h-200px">
                  <!-- Chat time -->
                  <div class="text-center small my-2">
                    Jul 16, 2022, 06:15 am
                  </div>
                  <!-- Chat message left -->
                  <div class="d-flex mb-1">
                    <div class="flex-shrink-0 avatar avatar-xs me-2">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/02.jpg" alt="" />
                    </div>
                    <div class="flex-grow-1">
                      <div class="w-100">
                        <div class="d-flex flex-column align-items-start">
                          <div class="bg-light text-secondary p-2 px-3 rounded-2">
                            Applauded no discovery😊
                          </div>
                          <div class="small my-2">6:15 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Chat message right -->
                  <div class="d-flex justify-content-end text-end mb-1">
                    <div class="w-100">
                      <div class="d-flex flex-column align-items-end">
                        <div class="bg-primary text-white p-2 px-3 rounded-2">
                          With pleasure
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Chat message left -->
                  <div class="d-flex mb-1">
                    <div class="flex-shrink-0 avatar avatar-xs me-2">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/02.jpg" alt="" />
                    </div>
                    <div class="flex-grow-1">
                      <div class="w-100">
                        <div class="d-flex flex-column align-items-start">
                          <div class="bg-light text-secondary p-2 px-3 rounded-2">
                            Please find the attached
                          </div>
                          <!-- Files START -->
                          <!-- Files END -->
                          <div class="small my-2">12:16 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Chat message left -->
                  <div class="d-flex mb-1">
                    <div class="flex-shrink-0 avatar avatar-xs me-2">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/02.jpg" alt="" />
                    </div>
                    <div class="flex-grow-1">
                      <div class="w-100">
                        <div class="d-flex flex-column align-items-start">
                          <div class="bg-light text-secondary p-2 px-3 rounded-2">
                            How promotion excellent curiosity😮
                          </div>
                          <div class="small my-2">3:22 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Chat message right -->
                  <div class="d-flex justify-content-end text-end mb-1">
                    <div class="w-100">
                      <div class="d-flex flex-column align-items-end">
                        <div class="bg-primary text-white p-2 px-3 rounded-2">
                          And sir dare view.
                        </div>
                        <!-- Images -->
                        <div class="d-flex my-2">
                          <div class="small text-secondary">5:35 PM</div>
                          <div class="small ms-2">
                            <i class="fa-solid fa-check"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Chat time -->
                  <div class="text-center small my-2">2 New Messages</div>
                  <!-- Chat Typing -->
                  <div class="d-flex mb-1">
                    <div class="flex-shrink-0 avatar avatar-xs me-2">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/02.jpg" alt="" />
                    </div>
                    <div class="flex-grow-1">
                      <div class="w-100">
                        <div class="d-flex flex-column align-items-start">
                          <div class="bg-light text-secondary p-3 rounded-2">
                            <div class="typing d-flex align-items-center">
                              <div class="dot"></div>
                              <div class="dot"></div>
                              <div class="dot"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Chat conversation END -->
                <!-- Chat bottom START -->
                <div class="mt-2">
                  <!-- Chat textarea -->
                  <textarea class="form-control mb-sm-0 mb-3" placeholder="Type a message" rows="1"></textarea>
                  <!-- Button -->
                  <div class="d-sm-flex align-items-end mt-2">
                    <button class="btn btn-sm btn-danger-soft me-2">
                      <i class="fa-solid fa-face-smile fs-6"></i>
                    </button>
                    <button class="btn btn-sm btn-secondary-soft me-2">
                      <i class="fa-solid fa-paperclip fs-6"></i>
                    </button>
                    <button class="btn btn-sm btn-success-soft me-2">
                      Gif
                    </button>
                    <button class="btn btn-sm btn-primary ms-auto">Send</button>
                  </div>
                </div>
                <!-- Chat bottom START -->
              </div>
            </div>
            <!-- Chat toast 2 END -->
          </div>
        </div>
        <!-- Chat END -->
      </div>
      <!-- Main Chat END -->

      <!-- Modal create Feed START -->
      <div class="modal fade" id="modalCreateFeed" tabindex="-1" aria-labelledby="modalLabelCreateFeed"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <!-- Modal feed header START -->
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabelCreateFeed">Create post</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- Modal feed header END -->

            <!-- Modal feed body START -->
            <div class="modal-body">
              <!-- Add Feed -->
              <div class="d-flex mb-3">
                <!-- Avatar -->
                <div class="avatar avatar-xs me-2">
                  <img class="avatar-img rounded-circle" src="@/assets/images/avatar/03.jpg" alt="" />
                </div>
                <!-- Feed box  -->
                <form class="w-100">
                  <textarea class="form-control pe-4 fs-3 lh-1 border-0" rows="4" placeholder="Share your thoughts..."
                    autofocus></textarea>
                </form>
              </div>
              <!-- Feed rect START -->
              <div class="hstack gap-2">
                <a class="icon-md bg-success bg-opacity-10 text-success rounded-circle" href="#"
                  data-bs-toggle="tooltip" data-bs-placement="top" title="Photo">
                  <i class="bi bi-image-fill"></i>
                </a>
                <a class="icon-md bg-info bg-opacity-10 text-info rounded-circle" href="#" data-bs-toggle="tooltip"
                  data-bs-placement="top" title="Video">
                  <i class="bi bi-camera-reels-fill"></i>
                </a>
                <a class="icon-md bg-danger bg-opacity-10 text-danger rounded-circle" href="#" data-bs-toggle="tooltip"
                  data-bs-placement="top" title="Events">
                  <i class="bi bi-calendar2-event-fill"></i>
                </a>
                <a class="icon-md bg-warning bg-opacity-10 text-warning rounded-circle" href="#"
                  data-bs-toggle="tooltip" data-bs-placement="top" title="Feeling/Activity">
                  <i class="bi bi-emoji-smile-fill"></i>
                </a>
                <a class="icon-md bg-light text-secondary rounded-circle" href="#" data-bs-toggle="tooltip"
                  data-bs-placement="top" title="Check in">
                  <i class="bi bi-geo-alt-fill"></i>
                </a>
                <a class="icon-md bg-primary bg-opacity-10 text-primary rounded-circle" href="#"
                  data-bs-toggle="tooltip" data-bs-placement="top" title="Tag people on top">
                  <i class="bi bi-tag-fill"></i>
                </a>
              </div>
              <!-- Feed rect END -->
            </div>
            <!-- Modal feed body END -->

            <!-- Modal feed footer -->
            <div class="modal-footer row justify-content-between">
              <!-- Select -->
              <div class="col-lg-3">
                <select class="form-select js-choice choice-select-text-none" data-position="top"
                  data-search-enabled="false">
                  <option value="PB">Public</option>
                  <option value="PV">Friends</option>
                  <option value="PV">Only me</option>
                  <option value="PV">Custom</option>
                </select>
                <!-- Button -->
              </div>
              <div class="col-lg-8 text-sm-end">
                <button type="button" class="btn btn-danger-soft me-2">
                  <i class="bi bi-camera-video-fill pe-1"></i> Live video
                </button>
                <button type="button" class="btn btn-success-soft">Post</button>
              </div>
            </div>
            <!-- Modal feed footer -->
          </div>
        </div>
      </div>
      <!-- Modal create feed END -->

      <!-- Modal create Feed photo START -->
      <div class="modal fade" id="feedActionPhoto" tabindex="-1" aria-labelledby="feedActionPhotoLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <!-- Modal feed header START -->
            <div class="modal-header">
              <h5 class="modal-title" id="feedActionPhotoLabel">
                Add post photo
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- Modal feed header END -->

            <!-- Modal feed body START -->
            <div class="modal-body">
              <!-- Add Feed -->
              <div class="d-flex mb-3">
                <!-- Avatar -->
                <div class="avatar avatar-xs me-2">
                  <img class="avatar-img rounded-circle" src="@/assets/images/avatar/03.jpg" alt="" />
                </div>
                <!-- Feed box  -->
                <form class="w-100">
                  <textarea class="form-control pe-4 fs-3 lh-1 border-0" rows="2"
                    placeholder="Share your thoughts..."></textarea>
                </form>
              </div>

              <!-- Dropzone photo START -->
              <div>
                <label class="form-label">Upload attachment</label>
                <div class="dropzone dropzone-default card shadow-none" data-dropzone='{"maxFiles":2}'>
                  <div class="dz-message">
                    <i class="bi bi-images display-3"></i>
                    <p>Drag here or click to upload photo.</p>
                  </div>
                </div>
              </div>
              <!-- Dropzone photo END -->
            </div>
            <!-- Modal feed body END -->

            <!-- Modal feed footer -->
            <div class="modal-footer">
              <!-- Button -->
              <button type="button" class="btn btn-danger-soft me-2" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" class="btn btn-success-soft">Post</button>
            </div>
            <!-- Modal feed footer -->
          </div>
        </div>
      </div>
      <!-- Modal create Feed photo END -->

      <!-- Modal create Feed video START -->
      <div class="modal fade" id="feedActionVideo" tabindex="-1" aria-labelledby="feedActionVideoLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <!-- Modal feed header START -->
            <div class="modal-header">
              <h5 class="modal-title" id="feedActionVideoLabel">
                Add post video
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- Modal feed header END -->

            <!-- Modal feed body START -->
            <div class="modal-body">
              <!-- Add Feed -->
              <div class="d-flex mb-3">
                <!-- Avatar -->
                <div class="avatar avatar-xs me-2">
                  <img class="avatar-img rounded-circle" src="@/assets/images/avatar/03.jpg" alt="" />
                </div>
                <!-- Feed box  -->
                <form class="w-100">
                  <textarea class="form-control pe-4 fs-3 lh-1 border-0" rows="2"
                    placeholder="Share your thoughts..."></textarea>
                </form>
              </div>

              <hr />

              <!-- Dropzone photo START -->
              <div id="uploadVideo" onclick="triggerFileInput()" ondrop="dropHandler(event);"
                ondragover="dragOverHandler(event);">
                <label class="form-label">上传文件</label>
                <div>
                  <div class="" style="
                    margin: 0 auto;
                    text-align: center;
                    border: 1px solid #000000;
                    border-radius: 10px;
                  ">
                    <i class="bi bi-camera-reels display-1" style="margin: 0 auto"></i>
                    <p>拖放到这里上传视频</p>
                  </div>
                </div>
              </div>

              <div id="fileInfoList" style="
                margin: 0 auto;
                text-align: center;
                border: 1px solid #ebdbdb;
                border-radius: 10px;
              ">
                <p id="fileInfo" v-for="(item, index) in fileInfoList" :key="index">
                  {{ item.info }}
                  <i class="bi bi-trash" @click="deleteFileItem(item.name)"></i>
                </p>
              </div>

              <!-- Dropzone photo END -->
            </div>
            <!-- Modal feed body END -->

            <!-- Modal feed footer -->
            <div class="modal-footer">
              <!-- Button -->
              <button type="button" class="btn btn-danger-soft me-2">
                <i class="bi bi-camera-video-fill pe-1"></i> Live video
              </button>
              <button type="button" class="btn btn-success-soft me-2" onclick="uploadFullVideo()">
                上传视频
              </button>
            </div>
            <!-- Modal feed footer -->
          </div>
        </div>
      </div>
      <!-- Modal create Feed video END -->

      <!-- Modal create events START -->
      <div class="modal fade" id="modalCreateEvents" tabindex="-1" aria-labelledby="modalLabelCreateAlbum"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <!-- Modal feed header START -->
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabelCreateAlbum">
                Create event
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- Modal feed header END -->
            <!-- Modal feed body START -->
            <div class="modal-body">
              <!-- Form START -->
              <form class="row g-4">
                <!-- Title -->
                <div class="col-12">
                  <label class="form-label">Title</label>
                  <input type="email" class="form-control" placeholder="Event name here" />
                </div>
                <!-- Description -->
                <div class="col-12">
                  <label class="form-label">Description</label>
                  <textarea class="form-control" rows="2" placeholder="Ex: topics, schedule, etc."></textarea>
                </div>
                <!-- Date -->
                <div class="col-sm-4">
                  <label class="form-label">Date</label>
                  <input type="text" class="form-control flatpickr" placeholder="Select date" />
                </div>
                <!-- Time -->
                <div class="col-sm-4">
                  <label class="form-label">Time</label>
                  <input type="text" class="form-control flatpickr" data-enableTime="true" data-noCalendar="true"
                    placeholder="Select time" />
                </div>
                <!-- Duration -->
                <div class="col-sm-4">
                  <label class="form-label">Duration</label>
                  <input type="email" class="form-control" placeholder="1hr 23m" />
                </div>
                <!-- Location -->
                <div class="col-12">
                  <label class="form-label">Location</label>
                  <input type="email" class="form-control" placeholder="Logansport, IN 46947" />
                </div>
                <!-- Add guests -->
                <div class="col-12">
                  <label class="form-label">Add guests</label>
                  <input type="email" class="form-control" placeholder="Guest email" />
                </div>
                <!-- Avatar group START -->
                <div class="col-12 mt-3">
                  <ul class="avatar-group list-unstyled align-items-center mb-0">
                    <li class="avatar avatar-xs">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/01.jpg" alt="avatar" />
                    </li>
                    <li class="avatar avatar-xs">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/02.jpg" alt="avatar" />
                    </li>
                    <li class="avatar avatar-xs">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/03.jpg" alt="avatar" />
                    </li>
                    <li class="avatar avatar-xs">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/04.jpg" alt="avatar" />
                    </li>
                    <li class="avatar avatar-xs">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/05.jpg" alt="avatar" />
                    </li>
                    <li class="avatar avatar-xs">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/06.jpg" alt="avatar" />
                    </li>
                    <li class="avatar avatar-xs">
                      <img class="avatar-img rounded-circle" src="@/assets/images/avatar/07.jpg" alt="avatar" />
                    </li>
                    <li class="ms-3">
                      <small> +50 </small>
                    </li>
                  </ul>
                </div>
                <!-- Upload Photos or Videos -->
                <!-- Dropzone photo START -->
                <div>
                  <label class="form-label">Upload attachment</label>
                  <div class="dropzone dropzone-default card shadow-none" data-dropzone='{"maxFiles":2}'>
                    <div class="dz-message">
                      <i class="bi bi-file-earmark-text display-3"></i>
                      <p>
                        Drop presentation and document here or click to upload.
                      </p>
                    </div>
                  </div>
                </div>
                <!-- Dropzone photo END -->
              </form>
              <!-- Form END -->
            </div>
            <!-- Modal feed body END -->
            <!-- Modal footer -->
            <!-- Button -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger-soft me-2" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" class="btn btn-success-soft">
                Create now
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal create events END -->



      <!-- 会员弹窗 -->
      <div class="modal fade" id="vipPayModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title mx-auto" id="exampleModalLabel">会员获取永久专属账号</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">


              <div style="margin-left: 20px;">
                <h5 class="m-auto w-350px d-inline ">会员30rmb,永久获取靓号
                </h5>


                <select v-model="selectedVipNum" class="form-select form-select-sm w-200px mt-3 d-inline"
                  aria-label=".form-select-sm example">
                  <option v-for="option in VipNumList" :value="option.vipUser" :key="option.id">{{ option.vipUser }}
                  </option>
                </select>







              </div>









              <div class="input-group w-400px my-3 m-auto ">
                <span class="input-group-text ">选择自定义账号</span>
                <input v-model="selectedVipNum" type="text" aria-label="First name" class="form-control">
              </div>




              <img src="@/assets/images/payment/wxpay2.jpg" class="mx-auto d-block" style="width:200px">

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">不需要会员</button>
              <button type="button" @click="paymentForVip" class="btn btn-primary">充值完成</button>
            </div>
          </div>
        </div>
      </div>





    </body>
  </div>











</template>

<script>





import '@/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/vendor/tiny-slider/dist/tiny-slider.js'
import '@/assets/vendor/OverlayScrollbars-master/js/OverlayScrollbars.min.js'
import '@/assets/vendor/choices.js/public/assets/scripts/choices.min.js'
import '@/assets/vendor/glightbox-master/dist/js/glightbox.min.js'
import '@/assets/vendor/flatpickr/dist/flatpickr.min.js'
import '@/assets/vendor/plyr/plyr.js'
import '@/assets/js/functions.js'
// import '@/assets/js/vue.global.min.js'
// import '@/assets/js/axios.min.js'




import '@/assets/vendor/font-awesome/css/all.min.css'
import '@/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '@/assets/vendor/OverlayScrollbars-master/css/OverlayScrollbars.min.css'
import '@/assets/vendor/tiny-slider/dist/tiny-slider.css'
import '@/assets/vendor/choices.js/public/assets/styles/choices.min.css'
import '@/assets/vendor/glightbox-master/dist/css/glightbox.min.css'
import '@/assets/vendor/dropzone/dist/dropzone.css'
import '@/assets/vendor/flatpickr/dist/flatpickr.css'
import '@/assets/vendor/plyr/plyr.css'
import '@/assets/css/style.css'
import '@/assets/css/mycustom.css'


import { default as axios } from '@/utils/request';
import Header from './Header.vue';
import { ElMessage } from 'element-plus';



export default {
  components: {
    Header
  },
  data() {
    return {
      phone: null,
      phonecode: null,
      videoList: [],
      comment: "",
      userId: "",
      contentId: null,
      videoIdList: [],
      commentPage: 1,
      commentList: [],
      fileInfoList: [],
      displayStatus: [],
      videoPage: 0, //视频内容页数 默认1
      searchTerm: null,
      searchTermPage: 1,
      selectedVipNum: null, // 选择的号码 和 渲染select默认选择号码
      VipNumList: null,
      loginUserInfo: {},
      recommendUser: {},//推荐用户列表数据 
    };
  },



  methods: {

    gotopage(path) {

      this.$router.push(path)
    },

    checkCookie(cookieName) {


      cookieName = cookieName + "=";
      let cookies = document.cookie.split(';');
      let userInfoCookieExists = false;
      let userInfoValue = '';

      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
          userInfoCookieExists = true;

          // userInfoValue = cookie.substring(cookieName.length);
          return true;
        }


      }

      return false;
    },



    checkLoginStatus() {
      let cookies = document.cookie.split(';');
      let userInfoCookieExists = false;
      let userInfoValue = '';

      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf('userInfo=') === 0) {
          userInfoCookieExists = true;
          userInfoValue = cookie.substring('userInfo='.length);
          break;
        }
      }

      if (!userInfoCookieExists || userInfoValue === 'signout') {
        return false; // 用户没有登录
      } else {
        return true; // 用户登录
      }
    },


    signOut() {

      function setCookie(name, value) {
        document.cookie = name + '=' + value + '; domain=.kekechat.com; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT';
      }

      setCookie('userInfo', 'signout');


      window.location.href = "/";
    },
    showVideoComment(id) {


      if (!this.displayStatus.includes(id)) {
        this.displayStatus.push(id);

        axios
          .post(
            "/comment/userComment/getVideoComment",
            {
              contentId: this.videoIdList.toString(),
              commentPage: this.commentPage,
            },
            {
              withCredentials: true, //设置跨域的时候传递cookie，需要服务端的配合
            }
          )
          .then((response) => {
            var data = response.data.data;

            this.commentList = data;
            console.log("showVideoCommentaaa" + JSON.stringify(this.commentList));

          })
          .catch((error) => {
            console.log(error);
          });

        document.getElementById(id).style.display = "block";

        return;
      } else {
        this.displayStatus = this.displayStatus.filter((i) => i !== id);
        //操作评论列表显示或隐藏
        document.getElementById(id).style.display = "none";

        return;
      }
    },

    getVideoComment() {
      axios
        .post(
          "/comment/userComment/getVideoComment",
          {
            contentId: this.videoIdList.toString(),
            commentPage: this.commentPage,
          },
          {
            withCredentials: true, //设置跨域的时候传递cookie，需要服务端的配合
          }
        )
        .then((response) => {
          var data = response.data.data;

          console.log("aaaaaaaaaa" + data);


          this.commentList = data;

          //this.commentList = this.commentList.concat(result);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    submitComment(contentId) {
      //this.showVideoComment(contentId); //发送评论的时候 ，打开 并展示评论
      //下面axios 同showVideoComment
      //  this.getVideoComment();




      if (!this.displayStatus.includes(contentId)) {
        this.displayStatus.push(contentId);

        axios
          .post(
            "/comment/userComment/getVideoComment",
            {
              contentId: this.videoIdList.toString(),
              commentPage: this.commentPage,
            },
            {
              withCredentials: true, //设置跨域的时候传递cookie，需要服务端的配合
            }
          )
          .then((response) => {




            var data = response.data.data;

            this.commentList = data;
          })
          .catch((error) => {
            console.log(error);
          });

        document.getElementById(contentId).style.display = "block";
      } else {
        this.displayStatus = this.displayStatus.filter((i) => i !== contentId);
        //操作评论列表显示或隐藏
        //  document.getElementById(contentId).style.display = "none";
      }

      axios
        .post(
          "/comment/userComment/submitComment",
          {
            comment: this.comment, //用户的具体评论
            // userId: this.userId, //评论用户的id,登录的 时候记录下来 没有使用
            contentId: contentId, //在哪个内容下评论的
          },
          {
            withCredentials: true, //设置跨域的时候传递cookie，需要服务端的配合
          }
        )
        .then((response) => {
          var data = response.data;
          //这是用户添加的评论对象，直接添加到本地commentList
          var comment = { name: "John", comment: this.comment };

          console.log(
            "commment" + this.commentList[contentId].unshift(comment)
          );

          console.log("ccccjson" + JSON.stringify(this.commentList[contentId]));

          // data = JSON.stringify(this.commentList[contentId]);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getVideoList() {
      //后端不使用这个参数
      this.videoPage = this.videoPage + 1;

      var temptoken;

      function checkCookie(name) {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          if (cookie.startsWith(name + "=")) {
            return true;
          }
        }
        return false;
      }

      var hasUserIdCookie = checkCookie("temptoken");
      if (hasUserIdCookie) {
        console.log("存在名为 temptoken 的 cookie");

        function getCookie(name) {
          var cookies = document.cookie.split(";");
          for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.startsWith(name + "=")) {
              return cookie.substring(name.length + 1);
            }
          }
          return null;
        }

        // 调用示例
        var temptokenValue = getCookie("temptoken");

        temptoken = temptokenValue;
      } else {
        console.log("不存在名为 temptoken 的 cookie");
        function generateUUID() {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
              var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
              return v.toString(16);
            }
          );
        }

        var uuid = generateUUID();
        console.log(" 设置 temptoken 的 cookie");

        function setCookie(name, value, days) {
          var expires = "";
          if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
          }
          document.cookie = name + "=" + value + expires + "; domain=.kekechat.com;  path=/";


        }

        // 调用示例
        setCookie("temptoken", uuid, 365);
      }

      axios.defaults.withCredentials = true;
      axios
        .post(
          "/video/videoList/getVideoList",
          {
            page: this.videoPage,
            temptoken: temptoken,
          },

          {
            withCredentials: true,
          }
        )
        .then((response) => {
          var data = response.data;
          console.log("222c" + data);

          this.videoList = this.videoList.concat(data.data);

          //   this.videoList = data.data;

          var variableArray = this.videoList;

          var myArray = [];
          for (var i = 0; i < variableArray.length; i++) {
            var list = variableArray[i];
            myArray.push(list.id);
          }

          this.videoIdList = myArray;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    searchContent(event) {
      event.preventDefault(); // 阻止默认提交行为

      axios.defaults.withCredentials = true;
      axios
        .post(
          "/video/videoList/searchContent",
          {
            searchTermPage: this.searchTermPage,
            searchTerm: this.searchTerm,
          },

          {
            withCredentials: true,
          }
        )
        .then((response) => {
          var data = response.data;
          //下次拉取数据 page 增加1
          this.searchTermPage = this.searchTermPage + 1;
          //如果之前看过视频，需要置空
          this.videoList = null;
          this.videoIdList = null;
          if (this.videoList != null) {
            this.videoList = this.videoList.concat(data.data);
          }

          this.videoList = data.data;
          console.log("sssssssssscc" + this.videoIdList);

          var variableArray = this.videoList;

          var myArray = [];
          for (var i = 0; i < variableArray.length; i++) {
            var list = variableArray[i];
            myArray.push(list.id);
          }

          this.videoIdList = myArray;
        })
        .catch((error) => {
          console.log(error);
        });
    },


    incLikeNum(videoID) {



      var hasUserIdCookie = this.checkLoginStatus();
      if (!hasUserIdCookie) {

        ElMessage.success("还没有登录");
        return;
      }

      axios.defaults.withCredentials = true;
      axios
        .post(
          "/video/videoList/incLikeNum",
          {
            videoID: videoID,
          },

          {
            withCredentials: true,
          }
        )
        .then((response) => {
          // 根据id选择元素
          var elementById = document.getElementById("likeEle" + videoID);
          // 如果找到具有指定id的元素，则添加"active" class
          if (elementById) {

            elementById.classList.add("active");

            this.videoList.forEach(item => { if (item.id === videoID) { item.starNum = item.starNum + 1; } });

          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getRecommendUser(videoID) {


      axios.defaults.withCredentials = true;
      axios
        .post(
          "/user/userInfo/getRecommendUser",
          {

          },

          {
            withCredentials: true,
          }
        )
        .then((response) => {

          var data = response.data;
          this.recommendUser = data.data;
          console.log(this.recommendUser);

        })
        .catch((error) => {
          console.log(error);
        });
    },

    addFollowUser(followId) {



      axios.defaults.withCredentials = true;
      axios
        .post(
          "/user/userInfo/addFollowUser",
          {
            followId: followId,
          },

          {
            withCredentials: true,
          }
        )
        .then((response) => {

          ElMessage.success("关注用户成功");

        })
        .catch((error) => {
          console.log(error);
        });
    },



    paymentForVip() {
      axios.defaults.withCredentials = true;
      axios
        .post(
          "/video/paymentAction/paymentForVip",
          {
            selectedVipNum: this.selectedVipNum,
          },

          {
            withCredentials: true,
          }
        )
        .then((response) => {
          ElMessage.success("充值完成,正在跳转");

          // 获取modal框的实例
          var modal = new bootstrap.Modal(
            document.getElementById("vipPayModal")
          );
          // 打开modal框
          modal.hide();

          this.loginWithAccount(
            this.selectedVipNum,
            this.selectedVipNum + "123"
          );

          var hasUserinfoCookie = this.checkLoginStatus();

          if (hasUserinfoCookie) {
            ElMessage.success("为你切换为会员账号");
            alert(
              "账号为" +
              this.selectedVipNum +
              "123" +
              "  密码为" +
              this.selectedVipNum +
              "123"
            );
          } else {
            ElMessage.success("正在登录为新的会员账号");
            alert(
              "账号为" +
              this.selectedVipNum +
              "  密码为" +
              this.selectedVipNum +
              " + " +
              "123"
            );
          }
        })
        .catch((error) => {
          alert("出现错误");
        });
    },

    getUserMembersList() {
      axios.defaults.withCredentials = true;
      axios
        .post(
          "/user/userMembers/getUserMembersList",
          {},

          {
            withCredentials: true,
          }
        )
        .then((response) => {
          var data = response.data;
          this.VipNumList = data.data;

          this.selectedVipNum = this.VipNumList[0].vipUser;
        })
        .catch((error) => {

          alert(error);
        });
    },

    getLoginUserInfo() {
      var hasUserinfoCookie = this.checkLoginStatus()

      if (hasUserinfoCookie) {
        axios.defaults.withCredentials = true;
        axios
          .post(
            "/user/userInfo/getLoginUserInfo",
            {},

            {
              withCredentials: true,
            }
          )
          .then((response) => {
            var data = response.data;

            //如果不是正确token  返回null 会报错
            if (data.data == null) {
              this.loginUserInfo.nickname = "默认新用户名";
              this.loginUserInfo.portraitImage = "defaultouxiang.jpg";
              return;
            }

            this.loginUserInfo = data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.loginUserInfo.nickname = "默认新用户名";
        this.loginUserInfo.portraitImage = "defaultouxiang.jpg";
      }
    },

    loginWithAccount(userAccount, password) {
      axios
        .post(
          "/user/LoginRegister/loginWithAccount",
          {
            userAccount: userAccount,
            password: password, //验证码作为密码传给后端
          }
        )
        .then(function (response) {
          var data = response.data;

          var token = data.data;
          //设置cookie
          //document.cookie = "userInfo="+token;

          // 设置一个名为 "username" 的 cookie，过期时间为一周后
          var d = new Date();
          d.setTime(d.getTime() + 3000 * 24 * 60 * 60 * 1000); // 3000 days later
          var expires = "expires=" + d.toUTCString();
          document.cookie = "userInfo=" + token + "; " + expires + "; domain=.kekechat.com; path=/";

          //返回上一级
          window.history.back();

          // window.location.href="http://127.0.0.1/";

          data = JSON.stringify(data);

          ElMessage.success("成功登录");
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    //检查是否有登录cookie,没有登录,就展示登录button
    autoPlayVideo() {
      //视频滑动到中间时候自动播放

      const videos = document.querySelectorAll(".video");
      const videoContainers = document.querySelectorAll(".video-container");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const video = entry.target.querySelector("video");
            if (entry.isIntersecting) {
              // 暂停其他视频
              videos.forEach((v) => {
                if (v !== video) {
                  v.pause();
                }
              });
              // 播放当前视频
              video.play();
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.5 }
      );

      videoContainers.forEach((videoContainer) => {
        observer.observe(videoContainer);

        console.log("rrrrrrrrr");
      });
    },

    autoPlayVideo2() {
      const videos = document.querySelectorAll("video");

      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      function handleScroll() {
        videos.forEach((video) => {
          if (isElementInViewport(video)) {
            video.play();
          } else {
            video.pause();
          }
        });
      }

      window.addEventListener("scroll", handleScroll);
    },

    //选择文件的时候 ，删除不想上传的文件
    deleteFileItem(name) {
      // this.fileInfoList.splice(index, 1);

      for (let index = 0; index < this.fileInfoList.length; index++) {
        if (this.fileInfoList[index].name === name) {
          this.fileInfoList.splice(index, 1);
        }
      }
    },

    computedDayNum(data) {
      // 将日期字符串转换为Date对象
      var givenDate = new Date(data);

      // 当前日期
      var currentDate = new Date();

      // 将两个日期转换为时间戳，并计算它们之间的毫秒数差异
      var timeDiff = currentDate.getTime() - givenDate.getTime();
      // console.log(timeDiff);
      // 将毫秒数差异转换为天数
      return Math.floor(timeDiff / (1000 * 3600 * 24));
    },

    showVipPaymentModal() {
      setTimeout(function () {

        //如果展示一次弹窗，就不再展示
        const cookies = document.cookie.split("; ");
        let vipShowStatus = false;

        cookies.forEach((cookie) => {
          const [name, value] = cookie.split("=");
          if (name.trim() === "vipShowStatus" && value === "1") {
            vipShowStatus = true;
          }
        });



        if (vipShowStatus) {
          return;
        }



        var d = new Date();
        d.setTime(d.getTime() + 3 * 24 * 60 * 60 * 1000); // 3000 days later
        var expires = "expires=" + d.toUTCString();
        document.cookie = "vipShowStatus=" + "1" + "; " + expires + "; domain=.kekechat.com; path=/";



        // 获取modal框的实例
        var modal = new bootstrap.Modal(document.getElementById("vipPayModal"));
        // 打开modal框
        modal.show();

        vm.getUserMembersList();

        var hasUserinfoCookie = this.checkLoginStatus()

        if (hasUserinfoCookie) {
          document.getElementById("exampleModalLabel").innerHTML =
            "切换成会员账号";
        } else {
          document.getElementById("exampleModalLabel").innerHTML =
            "注册成会员账号";
        }
      }, 10000);


    },

  },

  mounted() {
    // this.loginUserInfo.portraitImage = "defaultouxiang.jpg"
    this.getVideoList();
    this.getLoginUserInfo();
    this.getRecommendUser();


    // this.showVipPaymentModal();



    // 获取主内容区域  
    const scrollableContent = document.getElementById('scrollable-div');
    // 监听窗口的滚动事件  
    window.addEventListener('wheel', (event) => {
      // 禁用默认滚动行为  
      event.preventDefault();

      // 根据滚轮滚动的方向调整中间内容的 scrollTop  
      scrollableContent.scrollTop += event.deltaY; // deltaY 表示滚动的垂直距离  
    }, { passive: false }); // 使用 passive: false 以允许调用 preventDefault  



    setTimeout(() => {


      let vipStatus = this.checkCookie("payUser");

      console.log("ccccccccccccckeack" + vipStatus);

      if (!vipStatus) {
        this.$router.push({ name: 'paymentvip' });
      }

    }, 150000); // 2秒后跳转  




  },

  updated() {
    // 在数据更新后执行的操作
    //console.log("Data updated");
    // 可以在这里调用相应的方法进行操作
    this.autoPlayVideo();
  },






};




window.onload = function () {
  checkloginstatus();
  //  autoPlayVideo();
};

//检查是否有登录cookie,没有登录,就展示登录button
function autoPlayVideo() {
  //视频滑动到中间时候自动播放

  const videos = document.querySelectorAll(".video");
  const videoContainers = document.querySelectorAll(".video-container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target.querySelector("video");
        if (entry.isIntersecting) {
          // 暂停其他视频
          videos.forEach((v) => {
            if (v !== video) {
              v.pause();
            }
          });
          // 播放当前视频
          video.play();
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.3 }
  );

  videoContainers.forEach((videoContainer) => {
    observer.observe(videoContainer);

    console.log("rrrrrrrrr");
  });
}

function checkLogin() {
  let cookies = document.cookie.split(';');
  let userInfoCookieExists = false;
  let userInfoValue = '';

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf('userInfo=') === 0) {
      userInfoCookieExists = true;
      userInfoValue = cookie.substring('userInfo='.length);
      break;
    }
  }

  if (!userInfoCookieExists || userInfoValue === 'signout') {
    return false; // 用户登录
  } else {
    return true; // 用户没有登录
  }
}

//检查是否有登录cookie,没有登录,就展示登录button
function checkloginstatus() {


  var hasUserinfoCookie = checkLogin();

  if (hasUserinfoCookie) {
    console.log('Cookie "userInfo" 存在');

    document.getElementById("nologinStatusNav").style.display = "none";
  } else {
    console.log('Cookie "userInfo" 不存在');

    ElMessage.success("还没有登录,请登录");

    document.getElementById("loginStatusNav").style.display = "none";
  }
}

function triggerFileInput() {
  var fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.multiple = true;
  fileInput.style.display = "none";
  fileInput.onchange = function () {
    var files = fileInput.files;
    for (var i = 0; i < files.length; i++) {
      uploadFile(files[i]);
    }
  };
  document.body.appendChild(fileInput);
  fileInput.click();
}

function dragOverHandler(event) {
  event.preventDefault();
}
function dropHandler(event) {
  event.preventDefault();
  var files = event.dataTransfer.files;
  for (var i = 0; i < files.length; i++) {
    uploadFile(files[i]);
  }
}

var formData = new FormData();

var fileArry = [];

function uploadFile(file) {
  var fileSize = file.size; // Get the size of the file in bytes
  fileSize = (fileSize / 1024 / 1024).toFixed(2);
  var fileName = file.name; // Get the name of the file

  var videoList = new Object();
  videoList.name = fileName;
  videoList.info = "已选择文件" + fileName + "  文件大小 " + fileSize + "M";

  var temp = vm.fileInfoList;
  temp.push(videoList);
  vm.fileInfoList = temp;

  fileArry.push(file);

  //formData.delete('file1');

  formData.append("title", "titleaaa");

  // var formData = new FormData();
  // formData.append('file', file);
  // var xhr = new XMLHttpRequest();
  // xhr.open('POST', '/video/uploadVideo/uploadoss2', true);
  // xhr.onload = function () {
  //   if (xhr.status === 200) {
  //     alert('File uploaded successfully');
  //   } else {
  //     alert('File upload failed');
  //   }
  // };
  // xhr.send(formData);
}

function uploadFullVideo() {
  fileArry.forEach((element) => {
    vm.fileInfoList.forEach((el) => {
      if (el.name === element.name) {
        formData.append("files", element);
      }
    });
  });

  axios
    .post(
      "/video/uploadVideo/uploadoss2",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },

      {
        withCredentials: true,
      }
    )
    .then((response) => {
      console.log("Files uploaded successfully");
    })
    .catch((error) => {
      console.error("Error uploading files: ", error);
    });
}

function clearSelectFile() {
  vm.fileInfoList = [];
  fileArry = [];

  formData.delete("files");
  formData.delete("title");
}




</script>

<style scoped></style>