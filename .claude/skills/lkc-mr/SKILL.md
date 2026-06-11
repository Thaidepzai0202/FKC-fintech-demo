---
name: lkc-mr
description: Workflow GitHub cho project LKC trader-evaluation - tách branch từ main, commit, push, tạo PR vào main, tự merge qua gh CLI, rồi checkout main và pull. Cú pháp - /lkc-mr [số thứ tự] [nội dung commit]. Ví dụ - /lkc-mr 12 sửa lỗi hiển thị dấu tiếng Việt
---

# LKC MR Workflow

Tự động hoá flow tạo branch + commit + PR cho project `trader-evaluation`.
Đây là repo **GitHub** (`origin` → `github.com:Thaidepzai0202/FKC-fintech-demo.git`), nên "MR" = **Pull Request**, dùng `gh` CLI.

## Repo

| Đường dẫn | Remote | Default branch |
|---|---|---|
| `/Users/apple/Desktop/LKC Fin-tech/trader-evaluation` | `origin` | `main` |

## Args

- `$1`: số thứ tự (vd: `12`)
- `$2..`: nội dung commit (tiếng Việt hoặc Anh đều được).

Nếu user không truyền args, hỏi trước khi làm tiếp.

## Quy ước đặt tên

Với số thứ tự `N` và nội dung đã chuẩn hoá thành slug tiếng Anh `name`:

- **Branch**: `feature/lkc-N-name`
- **Commit message**: `feature-lkc-N-name`
- **PR title**: `feature-lkc-N-name`
- **PR target**: luôn là `main`

### Quy tắc chuẩn hoá nội dung commit

Nội dung branch/commit/PR **phải hoàn toàn bằng tiếng Anh, ngắn gọn nhất**:

- **Tiếng Anh đã chuẩn**: dùng nguyên, chỉ lowercase + thay space bằng `-`.
- **Tiếng Việt**: **dịch sang tiếng Anh ngắn gọn** rồi mới slug. Ví dụ:
  - "Sửa lỗi hiển thị dấu tiếng Việt" → `fix-vietnamese-diacritics`
  - "Bỏ chữ ủy thác" → `remove-trust-wording`
  - "Thêm link bản tin" → `add-news-link`
  - "Cập nhật SEO metadata" → `update-seo-metadata`
- Nguyên tắc: **càng ngắn càng tốt** (tối đa ~5 từ), dùng động từ kỹ thuật phổ biến (`fix`, `add`, `update`, `remove`, `refactor`, `improve`...).
- KHÔNG transliterate tiếng Việt bỏ dấu (KHÔNG dùng `sua-loi-...`).

Sau khi chuẩn hoá xong, **hiển thị tên đã dịch cho user xem và xác nhận** trước khi tạo branch. Nếu user muốn đổi từ khác, theo user.

## Quy trình

### Bước 0: Kiểm tra có thay đổi không

```bash
git status --porcelain
```

Nếu không có thay đổi nào (working tree sạch) → dừng, báo user.

### Bước 1: Đảm bảo đang ở main

```bash
git branch --show-current
```

- Nếu đang ở `main`: ok.
- Nếu KHÔNG ở `main`: hỏi user xác nhận trước khi tiếp tục (có thể họ đang dở việc trên branch khác).

**KHÔNG `git pull` trước khi tạo branch** — tạo branch trực tiếp từ HEAD hiện tại của main local để tránh conflict. Pull lại ở Bước cuối.

### Bước 2: Tạo branch mới mang theo working changes

```bash
git checkout -b feature/lkc-N-name
```

`git checkout -b` mang theo các thay đổi chưa stage qua branch mới — đúng ý đồ.
Nếu branch đã tồn tại local: hỏi user (đổi tên / xoá branch cũ / dừng).

### Bước 3: Preview và xin xác nhận

In ra trước khi commit:
- Branch sẽ tạo: `feature/lkc-N-name`
- Commit message: `feature-lkc-N-name`
- Danh sách file (`git status --short`)

Hỏi "Tiếp tục commit + push + tạo PR + merge không?" — chỉ tiếp khi user đồng ý.

### Bước 4: Stage + commit

```bash
git add -A
git commit -m "feature-lkc-N-name

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

### Bước 5: Push (public branch)

```bash
git push -u origin feature/lkc-N-name
```

### Bước 6: Tạo PR vào main

```bash
gh pr create --base main --head feature/lkc-N-name \
  --title "feature-lkc-N-name" \
  --body "Auto PR via /lkc-mr"
```

Lệnh in URL PR ra stdout — capture lại để báo user.

### Bước 7: Merge PR vào main

User làm 1 mình → tự merge ngay, xoá branch nguồn:

```bash
gh pr merge feature/lkc-N-name --merge --delete-branch
```

**Xử lý lỗi:**
- Báo "not mergeable" / conflict → dừng, báo user (đừng force).
- Báo cần review/approval (branch protection) → thử `gh pr merge --admin --merge --delete-branch` nếu user có quyền admin; nếu vẫn fail → báo user PR đã tạo nhưng cần duyệt thủ công, **bỏ qua Bước 8**.

### Bước 8: Checkout main + pull

```bash
git checkout main
git pull origin main
```

`--delete-branch` ở Bước 7 đã xoá branch remote + local. Xác nhận lại với user là đã merge xong và main đã cập nhật.

## Token / xác thực

Skill dùng `gh` CLI nên **không cần token thủ công** — chỉ cần `gh` đã đăng nhập.
Kiểm tra: `gh auth status`. Nếu chưa đăng nhập: `gh auth login` (chọn GitHub.com → HTTPS → login qua browser).
Cần token scope `repo` + `workflow` (gh login mặc định cấp đủ).
