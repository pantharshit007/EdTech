import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RiEditBoxLine } from "react-icons/ri"

import IconBtn from '../../common/IconBtn';

function MyProfile() {
    const { user } = useSelector(state => state.profile)
    const navigate = useNavigate();

    return (
        <>
            <h1 className="mb-14 text-3xl font-medium text-richblack-5">
                My Profile
            </h1>

            {/* SECTION-1 */}
            <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
                <div className="flex items-center gap-x-4">
                    <img
                        src={user?.image}
                        alt={'profile-' + user?.firstName}
                        className="aspect-square w-[78px] rounded-full object-cover"
                    />

                    <div className="space-y-1">
                        <p className="text-lg font-semibold text-richblack-5">
                            {user?.firstName + " " + user?.lastName}
                        </p>
                        <p className="text-sm text-richblack-300">
                            {user?.email}
                        </p>
                    </div>
                </div>

                {/* EDIT */}
                <IconBtn
                    onClick={() => navigate("dashboard/settings")}
                    text={"Edit"}
                >
                    <RiEditBoxLine />
                </IconBtn>
            </div>

            {/* SECTION-2 */}
            <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
                <div className="flex w-full items-center justify-between">
                    <h1 className="text-lg font-semibold text-richblack-5">About</h1>

                    {/* EDIT */}
                    <IconBtn
                        onClick={() => navigate("dashboard/settings")}
                        text={"Edit"}
                    >
                        <RiEditBoxLine />
                    </IconBtn>
                </div>

                <p
                    className={`text-sm font-medium
                        ${user?.additionalDetails?.about
                            ? "text-richblack-5"
                            : "text-richblack-400"
                        }`}>
                    {user?.additionalDetails?.about ? user?.additionalDetails?.about : "Write Something About Yourself"}
                </p>
            </div>

            {/* SECTION-3 */}
            <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
                <div className="flex w-full items-center justify-between">
                    <h1 className="text-lg font-semibold text-richblack-5">Personal Details</h1>
                    {/* EDIT */}
                    <IconBtn
                        onClick={() => navigate("dashboard/settings")}
                        text={"Edit"}
                    >
                        <RiEditBoxLine />
                    </IconBtn>
                </div>

                <div className="flex max-w-[500px] justify-between text-white">
                    <div className="flex flex-col gap-y-5">
                        <div>
                            <p className="mb-2 text-lg text-richblack-600">First Name</p>
                            <p className="text-sm font-medium text-richblack-5">{user?.firstName}</p>
                        </div>
                        <div>
                            <p className="mb-2 text-lg text-richblack-600">Email</p>
                            <p className="text-sm font-medium text-richblack-5">{user?.email}</p>
                        </div>
                        <div>
                            <p className="mb-2 text-lg text-richblack-600">Gender</p>
                            <p className="text-sm font-medium text-richblack-5">{user?.additionalDetails?.gender ?? "Add Gender"}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-5">
                        <div>
                            <p className="mb-2 text-lg text-richblack-600">Last Name</p>
                            <p className="text-sm font-medium text-richblack-5">{user?.lastName}</p>
                        </div>
                        <div>
                            <p className="mb-2 text-lg text-richblack-600">Phone No.</p>
                            <p className="text-sm font-medium text-richblack-5">{user?.additionalDetails?.contactNumber ?? "Add Contact Number"}</p>
                        </div>
                        <div>
                            <p className="mb-2 text-lg text-richblack-600">Date of Birth</p>
                            <p className="text-sm font-medium text-richblack-5">{user?.additionalDetails?.dateOfBirth ?? "Add Date Of Birth"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProfile