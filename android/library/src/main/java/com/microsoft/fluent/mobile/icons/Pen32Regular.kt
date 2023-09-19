package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pen32: ImageVector
  get() {
    if (_pen32 != null) {
      return _pen32!!
    }
    _pen32 = fluentIcon(name = "Regular.Pen32", 32f) {
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
          lineToRelative(14.978F, -14.98F)
          lineToRelative(0.276F, 0.276F)
          curveToRelative(0.586F, 0.586F, 0.586F, 1.536F, 0.0F, 2.121F)
          lineToRelative(-2.232F, 2.233F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.023F, 0.0F, 1.414F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          lineToRelative(2.232F, -2.232F)
          curveToRelative(1.367F, -1.367F, 1.367F, -3.583F, 0.0F, -4.95F)
          lineToRelative(-0.275F, -0.276F)
          lineToRelative(0.9F, -0.901F)
          curveToRelative(1.91F, -1.91F, 1.91F, -5.005F, 0.0F, -6.914F)
          close()
          moveToRelative(-5.5F, 1.414F)
          curveToRelative(1.129F, -1.128F, 2.958F, -1.128F, 4.086F, 0.0F)
          curveToRelative(1.129F, 1.128F, 1.129F, 2.958F, 0.0F, 4.086F)
          lineTo(9.857F, 26.229F)
          curveTo(9.625F, 26.46F, 9.33F, 26.62F, 9.01F, 26.689F)
          lineTo(4.3F, 27.7F)
          lineToRelative(1.01F, -4.71F)
          curveToRelative(0.068F, -0.32F, 0.228F, -0.614F, 0.46F, -0.846F)
          lineTo(23.064F, 4.848F)
          close()        
      }
    }
    return _pen32!!
  }

private var _pen32: ImageVector? = null
