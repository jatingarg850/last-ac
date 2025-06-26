import React, { useState, useEffect } from 'react';
import Button from '../commonComponents/button'; // Import the Button component
import '../../../src/index.css'; // Import the CSS file
import { API_ENDPOINTS } from '../../config/api';

const ProfileSection = () => {
    const [profileData, setProfileData] = useState({
        username: '',
        email: '',
        photoUrl: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({
        username: '',
        email: '',
    });
    const [showPhotoInput, setShowPhotoInput] = useState(false);
    const [photoInputValue, setPhotoInputValue] = useState('');

    useEffect(() => {
        // Get user data from localStorage
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setProfileData({
                username: user.username,
                email: user.email,
                photoUrl: user.photoUrl || '',
            });
            setEditData({
                username: user.username,
                email: user.email,
            });
        }
    }, []);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditData({
            username: profileData.username,
            email: profileData.email,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await fetch(`${API_ENDPOINTS.USERS}/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editData)
            });

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            const updatedUser = await response.json();
            setProfileData({
                username: updatedUser.username,
                email: updatedUser.email,
                photoUrl: updatedUser.photoUrl || '',
            });

            // Update localStorage
            localStorage.setItem('user', JSON.stringify({
                ...user,
                ...updatedUser
            }));

            setIsEditing(false);
        } catch (error) {
            console.error('Error updating profile:', error);
            // You might want to show an error message to the user
        }
    };

    const handleAvatarEdit = () => {
        setShowPhotoInput(true);
        setPhotoInputValue('');
    };

    const handlePhotoInputSave = () => {
        if (photoInputValue) {
            setProfileData(prev => ({ ...prev, photoUrl: photoInputValue }));
            // Update localStorage user
            const user = JSON.parse(localStorage.getItem('user'));
            localStorage.setItem('user', JSON.stringify({ ...user, photoUrl: photoInputValue }));
            setShowPhotoInput(false);
        }
    };

    const handlePhotoInputCancel = () => {
        setShowPhotoInput(false);
        setPhotoInputValue('');
    };

    return (
        <div className="profile-container">
            <div className="profile-section">
                {/* Avatar */}
                <div className="profile-avatar" style={{ position: 'relative' }}>
                    {profileData.photoUrl ? (
                        <img
                            src={profileData.photoUrl}
                            alt="Profile"
                            className="avatar-circle"
                            style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover' }}
                        />
                    ) : (
                        <div className="avatar-circle">
                            {profileData.username ? profileData.username[0].toUpperCase() : 'U'}
                        </div>
                    )}
                    <button
                        className="avatar-edit-btn"
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            background: '#fff',
                            border: '1px solid #ccc',
                            borderRadius: '50%',
                            width: 28,
                            height: 28,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
                        }}
                        title="Edit Photo"
                        onClick={handleAvatarEdit}
                    >
                        <span role="img" aria-label="edit">✏️</span>
                    </button>
                    {showPhotoInput && (
                        <div style={{ marginTop: 10, position: 'absolute', left: '50%', transform: 'translateX(-50%)', background: '#fff', padding: 10, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', zIndex: 10, width: 220 }}>
                            <input
                                type="text"
                                placeholder="Paste Google Drive image URL"
                                value={photoInputValue}
                                onChange={e => setPhotoInputValue(e.target.value)}
                                style={{ width: '100%', padding: 6, borderRadius: 4, border: '1px solid #ccc', marginBottom: 8 }}
                            />
                            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                                <button onClick={handlePhotoInputSave} style={{ padding: '4px 10px', borderRadius: 4, background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Save</button>
                                <button onClick={handlePhotoInputCancel} style={{ padding: '4px 10px', borderRadius: 4, background: '#eee', color: '#333', border: 'none', cursor: 'pointer' }}>Cancel</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Profile Details */}
                {isEditing ? (
                    <div className="profile-form">
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                value={editData.username}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={editData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-actions">
                            <button className="save-button" onClick={handleSave}>
                                Save Changes
                            </button>
                            <button className="cancel-button" onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="profile-details">
                        <div className="detail-group">
                            <label>Username</label>
                            <p>{profileData.username}</p>
                        </div>

                        <div className="detail-group">
                            <label>Email</label>
                            <p>{profileData.email}</p>
                        </div>

                        <div className="detail-group">
                            <label>Member Since</label>
                            <p>{new Date().toLocaleDateString()}</p>
                        </div>

                        <div className="form-actions">
                            <button className="edit-button" onClick={handleEdit}>
                                Edit Profile
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileSection;