# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_13_185135) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "birds", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.date "date"
    t.bigint "user_id"
    t.bigint "bird_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "birdname"
    t.index ["bird_id"], name: "index_posts_on_bird_id"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "taxons", force: :cascade do |t|
    t.string "name"
    t.bigint "bird_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bird_id"], name: "index_taxons_on_bird_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "emailaddress"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "posts", "birds"
  add_foreign_key "posts", "users"
  add_foreign_key "taxons", "birds"
end
