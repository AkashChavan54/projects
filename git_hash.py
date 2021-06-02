import subprocess
import re
import git
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

import git
repo = git.Repo('C:/Users/akash/git_repo')
tags = sorted(repo.tags, key=lambda t: t.tag.tagged_date)
latest_tag = tags
print(latest_tag)