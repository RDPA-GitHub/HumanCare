from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()



class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    profile_information = db.Column(db.String(200), nullable=False)
    profile_picture = db.Column(db.String(150), nullable=False)
    roles_id = db.Column(db.Integer, db.ForeignKey('roles.id'), nullable =False)
    roles = db.relationship('Role',  backref="user")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)

class Medical_file(db.Model):
    __tablename__ = 'medical_file'
    user_id=db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    file = db.Column(db.String(150), nullable=False)
    date = db.Column(db.DateTime(), default=db.func.now(), nullable=False)

class Medical_record(db.Model):
    __tablename__ = 'medical_record'
    user_id=db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    
    date = db.Column(db.DateTime(), default=db.func.now(), nullable=False)