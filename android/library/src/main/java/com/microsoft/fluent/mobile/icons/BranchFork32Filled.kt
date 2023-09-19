package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BranchFork32: ImageVector
  get() {
    if (_branchFork32 != null) {
      return _branchFork32!!
    }
    _branchFork32 = fluentIcon(name = "Filled.BranchFork32", 32f) {
      materialPath {
          moveTo(10.0F, 11.9F)
          curveToRelative(2.282F, -0.463F, 4.0F, -2.481F, 4.0F, -4.9F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          reflectiveCurveTo(4.0F, 4.239F, 4.0F, 7.0F)
          curveToRelative(0.0F, 2.419F, 1.718F, 4.437F, 4.0F, 4.9F)
          verticalLineToRelative(8.2F)
          curveToRelative(-2.282F, 0.463F, -4.0F, 2.481F, -4.0F, 4.9F)
          curveToRelative(0.0F, 2.761F, 2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          curveToRelative(0.0F, -2.419F, -1.718F, -4.437F, -4.0F, -4.9F)
          verticalLineTo(18.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          verticalLineToRelative(-1.1F)
          curveToRelative(2.282F, -0.463F, 4.0F, -2.481F, 4.0F, -4.9F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          reflectiveCurveToRelative(-5.0F, 2.239F, -5.0F, 5.0F)
          curveToRelative(0.0F, 2.419F, 1.718F, 4.437F, 4.0F, 4.9F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineToRelative(-9.0F)
          verticalLineToRelative(-4.1F)
          close()        
      }
    }
    return _branchFork32!!
  }

private var _branchFork32: ImageVector? = null
