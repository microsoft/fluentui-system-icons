package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PersonPill20: ImageVector
  get() {
    if (_personPill20 != null) {
      return _personPill20!!
    }
    _personPill20 = fluentIcon(name = "Regular.PersonPill20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveTo(7.79F, 2.0F, 6.0F, 3.79F, 6.0F, 6.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          close()
          moveTo(7.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          close()
          moveToRelative(5.879F, 5.0F)
          horizontalLineToRelative(-7.87F)
          curveTo(3.903F, 11.0F, 3.0F, 11.887F, 3.0F, 13.0F)
          curveToRelative(0.0F, 1.691F, 0.833F, 2.966F, 2.135F, 3.797F)
          curveToRelative(1.094F, 0.697F, 2.512F, 1.08F, 4.056F, 1.178F)
          curveToRelative(-0.146F, -0.329F, -0.24F, -0.675F, -0.285F, -1.026F)
          curveToRelative(-1.278F, -0.121F, -2.394F, -0.46F, -3.233F, -0.996F)
          curveTo(4.623F, 15.283F, 4.0F, 14.31F, 4.0F, 13.0F)
          curveToRelative(0.0F, -0.553F, 0.448F, -1.0F, 1.009F, -1.0F)
          horizontalLineToRelative(6.87F)
          lineToRelative(1.0F, -1.0F)
          close()
          moveToRelative(5.475F, -0.353F)
          curveToRelative(-1.024F, -1.024F, -2.684F, -1.024F, -3.708F, 0.0F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-1.023F, 1.023F, -1.023F, 2.683F, 0.0F, 3.707F)
          curveToRelative(1.024F, 1.024F, 2.684F, 1.024F, 3.707F, 0.0F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(1.024F, -1.024F, 1.024F, -2.684F, 0.0F, -3.707F)
          close()
          moveToRelative(-3.0F, 0.707F)
          curveToRelative(0.633F, -0.633F, 1.66F, -0.633F, 2.292F, 0.0F)
          curveToRelative(0.634F, 0.633F, 0.634F, 1.66F, 0.0F, 2.293F)
          lineTo(16.0F, 15.293F)
          lineTo(13.707F, 13.0F)
          lineToRelative(1.646F, -1.646F)
          close()
          moveToRelative(-1.5F, 4.292F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-1.0F, 1.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(1.0F, -1.0F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          close()        
      }
    }
    return _personPill20!!
  }

private var _personPill20: ImageVector? = null
