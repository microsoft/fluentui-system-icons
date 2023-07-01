package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Edit32: ImageVector
  get() {
    if (_edit32 != null) {
      return _edit32!!
    }
    _edit32 = fluentIcon(name = "Regular.Edit32", 32f) {
      materialPath {
          moveTo(28.564F, 3.434F)
          curveToRelative(-1.909F, -1.91F, -5.005F, -1.91F, -6.914F, 0.0F)
          lineTo(4.357F, 20.73F)
          curveToRelative(-0.505F, 0.504F, -0.852F, 1.143F, -1.002F, 1.84F)
          lineToRelative(-1.333F, 6.22F)
          curveToRelative(-0.07F, 0.332F, 0.031F, 0.677F, 0.27F, 0.917F)
          curveToRelative(0.24F, 0.24F, 0.586F, 0.342F, 0.917F, 0.27F)
          lineToRelative(6.22F, -1.332F)
          curveToRelative(0.698F, -0.15F, 1.338F, -0.498F, 1.842F, -1.002F)
          lineToRelative(17.294F, -17.295F)
          curveToRelative(1.909F, -1.91F, 1.909F, -5.005F, 0.0F, -6.914F)
          close()
          moveToRelative(-5.5F, 1.414F)
          curveToRelative(1.129F, -1.128F, 2.958F, -1.128F, 4.086F, 0.0F)
          curveToRelative(1.129F, 1.128F, 1.129F, 2.958F, 0.0F, 4.086F)
          lineToRelative(-0.9F, 0.901F)
          lineToRelative(-4.086F, -4.086F)
          lineToRelative(0.9F, -0.9F)
          close()
          moveTo(20.75F, 7.163F)
          lineToRelative(4.086F, 4.086F)
          lineTo(9.857F, 26.23F)
          curveToRelative(-0.232F, 0.23F, -0.527F, 0.39F, -0.847F, 0.459F)
          lineTo(4.3F, 27.7F)
          lineToRelative(1.01F, -4.71F)
          curveToRelative(0.068F, -0.32F, 0.228F, -0.614F, 0.46F, -0.846F)
          lineToRelative(14.978F, -14.98F)
          close()        
      }
    }
    return _edit32!!
  }

private var _edit32: ImageVector? = null
