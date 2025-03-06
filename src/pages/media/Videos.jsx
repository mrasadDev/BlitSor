import SearchBar from "./seach-bar";
import { IoArrowUpOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Divider, ScrollArea, Table } from "@mantine/core";
import FileBtn from "../../components/file-button/FileBtn";

const videos = () => {
  return (
    <div className="media-wrapper">
      <SearchBar />
      <div className="before-upload text-center my-5 ">
        <figure>
          <img src="images/speech-bubble.png" alt="..." />
        </figure>
        <p>
          Upload your first video now! Learn more about uploading in
          the Video Guidelines, Compression Guidelines, and 
          <a href="#">Help Center.</a>
        </p>
        <FileBtn title="Upload Video" width={true} />
      </div>
      <div className="all-video border bg-white rounded-2">
        <div className="all-video-head p-3">
          <h5>All Video</h5>
          <span className="text-secondary">
            Manage and Edit your channel videos easily!
          </span>
        </div>
        <Divider />
        <ScrollArea
          style={{ width: "100%" }}
          type="hover"
          scrollbarSize={10}
          offsetScrollbars
        >
          <div className="all-video-body p-3">
            <Table className="media-table">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Video</Table.Th>
                  <Table.Th>Visibility</Table.Th>
                  <Table.Th>Date</Table.Th>
                  <Table.Th>Views</Table.Th>
                  <Table.Th>Comments</Table.Th>
                  <Table.Th>Like Percentage</Table.Th>
                  <Table.Th></Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>
                    <div className="d-flex video-area">
                      <figure className="me-2 video-thumbnail">
                        <img src="/images/test.jpg" alt="..." />
                      </figure>
                      <div className="table-vid-detail">
                        <h6 className="mb-0">
                          Dota 2 Gameplay Ep 1 with all...
                        </h6>
                        <span className="text-secondary">Category: Dota 2</span>
                        <p className="text-secondary">
                          Hey there folks today i’ll be streaming and record a
                          full detailed guide for...
                        </p>
                      </div>
                    </div>
                  </Table.Td>
                  <Table.Td>
                    <span className="badge green-badge">Public</span>
                  </Table.Td>
                  <Table.Td>
                    <span className="date">20/06/24</span>
                  </Table.Td>
                  <Table.Td>
                    <span className="badge green-badge">
                      <IoArrowUpOutline /> 20%
                    </span>
                  </Table.Td>
                  <Table.Td>
                    <figure>
                      <img src="images/Avatars.png" alt="..." />
                    </figure>
                  </Table.Td>
                  <Table.Td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="video-progress-bar">
                        <div className="video-progress" width="70%"></div>
                      </div>
                      <span>70%</span>
                    </div>
                  </Table.Td>
                  <Table.Td>
                    <BsThreeDotsVertical className="text-secondary" />
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <div className="d-flex video-area">
                      <figure className="me-2 video-thumbnail">
                        <img src="/images/dasboard-vid-1.png" alt="..." />
                      </figure>
                      <div className="table-vid-detail">
                        <h6 className="mb-0">
                          Dota 2 Gameplay Ep 1 with all...
                        </h6>
                        <span className="text-secondary">Category: Dota 2</span>
                        <p className="text-secondary">
                          Hey there folks today i’ll be streaming and record a
                          full detailed guide for...
                        </p>
                      </div>
                    </div>
                  </Table.Td>
                  <Table.Td>
                    <span className="badge green-badge">Public</span>
                  </Table.Td>
                  <Table.Td>
                    <span className="date">20/06/24</span>
                  </Table.Td>
                  <Table.Td>
                    <span className="badge green-badge">
                      <IoArrowUpOutline /> 20%
                    </span>
                  </Table.Td>
                  <Table.Td>
                    <figure>
                      <img src="images/Avatars.png" alt="..." />
                    </figure>
                  </Table.Td>
                  <Table.Td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="video-progress-bar">
                        <div className="video-progress" width="70%"></div>
                      </div>
                      <span>70%</span>
                    </div>
                  </Table.Td>
                  <Table.Td>
                    <BsThreeDotsVertical className="text-secondary" />
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <div className="d-flex video-area">
                      <figure className="me-2 video-thumbnail">
                        <img src="/images/dasboard-vid-1.png" alt="..." />
                      </figure>
                      <div className="table-vid-detail">
                        <h6 className="mb-0">
                          Dota 2 Gameplay Ep 1 with all...
                        </h6>
                        <span className="text-secondary">Category: Dota 2</span>
                        <p className="text-secondary">
                          Hey there folks today i’ll be streaming and record a
                          full detailed guide for...
                        </p>
                      </div>
                    </div>
                  </Table.Td>
                  <Table.Td>
                    <span className="badge green-badge">Public</span>
                  </Table.Td>
                  <Table.Td>
                    <span className="date">20/06/24</span>
                  </Table.Td>
                  <Table.Td>
                    <span className="badge green-badge">
                      <IoArrowUpOutline /> 20%
                    </span>
                  </Table.Td>
                  <Table.Td>
                    <figure>
                      <img src="images/Avatars.png" alt="..." />
                    </figure>
                  </Table.Td>
                  <Table.Td>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="video-progress-bar">
                        <div className="video-progress" width="70%"></div>
                      </div>
                      <span>70%</span>
                    </div>
                  </Table.Td>
                  <Table.Td>
                    <BsThreeDotsVertical className="text-secondary" />
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
            {/* <Table.Tbody>
              {MediaTable.map((data) => {
                return (
                  <Table.Tr>
                    <Table.Td>
                      <div className="d-flex video-area">
                        <figure className="me-2 video-thumbnail">
                          <img src={data.video} alt="..." />
                        </figure>
                        <div className="table-vid-detail">
                          <h6 className="mb-0">
                            {data.heading}
                          </h6>
                          <span className="text-secondary">
                            Category: Dota 2
                          </span>
                          <p className="text-secondary">
                            Hey there folks today i’ll be streaming and record a
                            full detailed guide for...
                          </p>
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td>
                      <span className="badge green-badge">Public</span>
                    </Table.Td>
                    <Table.Td>
                      <span className="date">20/06/24</span>
                    </Table.Td>
                    <Table.Td>
                      <span className="badge green-badge">
                        <IoArrowUpOutline /> 20%
                      </span>
                    </Table.Td>
                    <Table.Td>
                      <figure>
                        <img src="images/Avatars.png" alt="..." />
                      </figure>
                    </Table.Td>
                    <Table.Td>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="video-progress-bar">
                          <div className="video-progress" width="70%"></div>
                        </div>
                        <span>70%</span>
                      </div>
                    </Table.Td>
                    <Table.Td>
                      <BsThreeDotsVertical className="text-secondary" />
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody> */}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default videos;
