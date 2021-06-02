<<<<<<< HEAD
import subprocess
import re
import git
=======
#this code gets you the hash code and other details from a git repo


'''import subprocess
>>>>>>> 98dc801660ae57e721f013d4672e2a94c138060c
process = subprocess.Popen(['git', 'rev-parse', 'HEAD'], shell=False, stdout=subprocess.PIPE)
git_head_hash = process.communicate()[0].strip()
print(git_head_hash)

'''repo = git.Repo('C:/Users/akash/git_repo')
tags = sorted(repo.tags, key=lambda t: t.tag.tagged_date)
latest_tag = tags
print(latest_tag)'''
'''
def get_git_tag():
    try:
        git_tag = str(
            subprocess.check_output(
                ['git', 'describe', '--exact-match', '--abbrev=0'], stderr=subprocess.STDOUT
            )
        ).strip('\'b\\n')
    except subprocess.CalledProcessError as exc_info:
        match = re.search(
            'fatal: no tag exactly matches \'(?P<commit>[a-z0-9]+)\'', str(exc_info.output)
        )
        if match:
            raise Exception(
                'Bailing: there is no git tag for the current commit, {commit}'.format(
                    commit=match.group('commit')
                )
            )
        raise Exception(str(exc_info.output))

    return git_tag 
get_git_tag()'''

'''def get_git_tag(self):
        try:
            self.tag = subprocess.check_output(['/usr/bin/git', '-C', self.GIT_REPO_LOCAL_DIR, 'describe', '--tags']).strip()
        except:
            pass 
get_git_tag("git") '''

<<<<<<< HEAD
import git
repo = git.Repo('C:/Users/akash/git_repo')
tags = sorted(repo.tags, key=lambda t: t.tag.tagged_date)
latest_tag = tags
print(latest_tag)
=======
commits = get_commits()
commits.sort(key = lambda c: len(c['message']), reverse=True)
for commit in commits[:1]:
    print (commit['title'])
    print (commit['author'])
    print (commit['hash'])
    print ('https://github.com/chavan/new_repo_name/commit/' + commit['hash'])
    print ()
>>>>>>> 98dc801660ae57e721f013d4672e2a94c138060c
