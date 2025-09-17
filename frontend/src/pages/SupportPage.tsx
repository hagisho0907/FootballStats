import React, { useState } from 'react';

interface Profile {
  id: string;
  name: string;
  jerseyNumber: string;
  position: string;
  teamLogo: string;
  nationality: string;
}

export const SupportPage: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    jerseyNumber: '',
    position: '',
    teamLogo: '',
    nationality: ''
  });

  const generateId = () => {
    return Math.floor(Math.random() * 90000) + 10000;
  };

  const handleCreate = () => {
    setFormData({
      name: '',
      jerseyNumber: '',
      position: '',
      teamLogo: '',
      nationality: ''
    });
    setShowCreateModal(true);
  };

  const handleUpdate = () => {
    if (profile) {
      setFormData({
        name: profile.name,
        jerseyNumber: profile.jerseyNumber,
        position: profile.position,
        teamLogo: profile.teamLogo,
        nationality: profile.nationality
      });
      setShowUpdateModal(true);
    }
  };

  const handleSaveProfile = (isUpdate = false) => {
    const newProfile: Profile = {
      id: isUpdate && profile ? profile.id : generateId().toString(),
      name: isUpdate && profile ? profile.name : formData.name,
      jerseyNumber: formData.jerseyNumber,
      position: formData.position,
      teamLogo: formData.teamLogo,
      nationality: isUpdate && profile ? profile.nationality : formData.nationality
    };
    
    setProfile(newProfile);
    setShowCreateModal(false);
    setShowUpdateModal(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData({ ...formData, teamLogo: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const positions = ['GK', 'DF', 'MF', 'FW'];
  const countries = ['🇯🇵 日本', '🇺🇸 アメリカ', '🇬🇧 イギリス', '🇩🇪 ドイツ', '🇫🇷 フランス', '🇪🇸 スペイン', '🇮🇹 イタリア', '🇧🇷 ブラジル'];

  return (
    <div style={{ backgroundColor: '#02070D', padding: '20px' }}>
      <h2 style={{ color: '#3C8DBC', marginBottom: '16px', fontSize: '24px', fontWeight: 'bold' }}>サポート</h2>
      
      {/* 開発中のメッセージ */}
      <div style={{
        backgroundColor: '#FFFFFF',
        padding: '16px',
        borderRadius: '12px',
        border: '4px solid #ef4444',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#dc2626', fontSize: '40px', fontWeight: 'bold', marginBottom: '8px' }}>開発中</h3>
        <p style={{ color: '#dc2626', fontSize: '18px' }}>このページは現在開発中です</p>
      </div>

      {/* プロフィールセクション */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: '#3C8DBC', marginBottom: '16px', fontSize: '20px', fontWeight: 'bold' }}>プロフィール</h3>
        
        {!profile ? (
          // プロフィール未作成時
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p style={{ color: '#FBF9FA', marginBottom: '20px', fontSize: '16px' }}>
              プロフィールを作成してデジタルライセンスを発行しましょう
            </p>
            <button
              onClick={handleCreate}
              style={{
                backgroundColor: '#3C8DBC',
                color: '#FBF9FA',
                border: 'none',
                borderRadius: '25px',
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Create Profile
            </button>
          </div>
        ) : (
          // プロフィール表示（デジタルライセンス風）
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: '350px',
              height: '220px',
              background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
              borderRadius: '16px',
              border: '3px solid #60a5fa',
              padding: '16px',
              position: 'relative',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
            }}>
              {/* ヘッダー */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px'
              }}>
                <div>
                  <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
                    {profile.jerseyNumber}
                  </div>
                  <div style={{ color: '#bfdbfe', fontSize: '12px' }}>
                    {profile.position}
                  </div>
                </div>
                <div style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>
                  DIGITAL LICENSE
                </div>
                <div style={{ fontSize: '20px' }}>
                  {profile.nationality.split(' ')[0]}
                </div>
              </div>

              {/* チームロゴ */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '45px',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '80px',
                backgroundColor: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid #1e40af'
              }}>
                {profile.teamLogo ? (
                  <img
                    src={profile.teamLogo}
                    alt="Team Logo"
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                ) : (
                  <div style={{ fontSize: '24px', color: '#1e40af' }}>⚽</div>
                )}
              </div>

              {/* 名前とID */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '16px',
                right: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}>
                  {profile.name}
                </div>
                <div style={{
                  color: '#bfdbfe',
                  fontSize: '12px'
                }}>
                  ID {profile.id}
                </div>
              </div>
            </div>
            
            <button
              onClick={handleUpdate}
              style={{
                backgroundColor: '#059669',
                color: '#FBF9FA',
                border: 'none',
                borderRadius: '25px',
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '20px'
              }}
            >
              Update Profile
            </button>
          </div>
        )}
      </div>

      {/* プロフィール作成モーダル */}
      {showCreateModal && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#031C32',
            borderRadius: '16px',
            padding: '24px',
            width: '100%',
            maxWidth: '400px',
            maxHeight: '80vh',
            overflowY: 'auto'
          }}>
            <h3 style={{
              margin: '0 0 20px 0',
              color: '#FBF9FA',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              プロフィール作成
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#FBF9FA', fontSize: '14px' }}>
                  名前:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#FBF9FA',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#02070D',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#FBF9FA', fontSize: '14px' }}>
                  背番号:
                </label>
                <input
                  type="text"
                  value={formData.jerseyNumber}
                  onChange={(e) => setFormData({ ...formData, jerseyNumber: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#FBF9FA',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#02070D',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#FBF9FA', fontSize: '14px' }}>
                  ポジション:
                </label>
                <select
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#FBF9FA',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#02070D',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="">選択してください</option>
                  {positions.map(pos => (
                    <option key={pos} value={pos}>{pos}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#FBF9FA', fontSize: '14px' }}>
                  国籍:
                </label>
                <select
                  value={formData.nationality}
                  onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#FBF9FA',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#02070D',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="">選択してください</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#FBF9FA', fontSize: '14px' }}>
                  チームロゴ:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#FBF9FA',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#02070D',
                    boxSizing: 'border-box'
                  }}
                />
                {formData.teamLogo && (
                  <div style={{ marginTop: '8px', textAlign: 'center' }}>
                    <img
                      src={formData.teamLogo}
                      alt="Preview"
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px',
              marginTop: '20px'
            }}>
              <button
                onClick={() => setShowCreateModal(false)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'transparent',
                  border: '1px solid #6b7280',
                  borderRadius: '8px',
                  color: '#6b7280',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                キャンセル
              </button>
              <button
                onClick={() => handleSaveProfile(false)}
                disabled={!formData.name || !formData.jerseyNumber || !formData.position || !formData.nationality}
                style={{
                  padding: '8px 16px',
                  backgroundColor: (!formData.name || !formData.jerseyNumber || !formData.position || !formData.nationality) ? '#6b7280' : '#3C8DBC',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#FBF9FA',
                  cursor: (!formData.name || !formData.jerseyNumber || !formData.position || !formData.nationality) ? 'not-allowed' : 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
              >
                作成
              </button>
            </div>
          </div>
        </div>
      )}

      {/* プロフィール更新モーダル */}
      {showUpdateModal && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#031C32',
            borderRadius: '16px',
            padding: '24px',
            width: '100%',
            maxWidth: '400px'
          }}>
            <h3 style={{
              margin: '0 0 20px 0',
              color: '#FBF9FA',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              プロフィール更新
            </h3>
            
            <p style={{ color: '#6b7280', fontSize: '12px', marginBottom: '16px' }}>
              ※改ざん対策のため、背番号・ポジション・チームロゴのみ編集可能です
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#FBF9FA', fontSize: '14px' }}>
                  背番号:
                </label>
                <input
                  type="text"
                  value={formData.jerseyNumber}
                  onChange={(e) => setFormData({ ...formData, jerseyNumber: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#FBF9FA',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#02070D',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#FBF9FA', fontSize: '14px' }}>
                  ポジション:
                </label>
                <select
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#FBF9FA',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#02070D',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="">選択してください</option>
                  {positions.map(pos => (
                    <option key={pos} value={pos}>{pos}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#FBF9FA', fontSize: '14px' }}>
                  チームロゴ:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#FBF9FA',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#02070D',
                    boxSizing: 'border-box'
                  }}
                />
                {formData.teamLogo && (
                  <div style={{ marginTop: '8px', textAlign: 'center' }}>
                    <img
                      src={formData.teamLogo}
                      alt="Preview"
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px',
              marginTop: '20px'
            }}>
              <button
                onClick={() => setShowUpdateModal(false)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'transparent',
                  border: '1px solid #6b7280',
                  borderRadius: '8px',
                  color: '#6b7280',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                キャンセル
              </button>
              <button
                onClick={() => handleSaveProfile(true)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#059669',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#FBF9FA',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
              >
                更新
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};