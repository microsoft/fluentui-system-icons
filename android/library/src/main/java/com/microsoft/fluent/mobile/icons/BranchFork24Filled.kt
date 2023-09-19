package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BranchFork24: ImageVector
  get() {
    if (_branchFork24 != null) {
      return _branchFork24!!
    }
    _branchFork24 = fluentIcon(name = "Filled.BranchFork24", 24f) {
      materialPath {
          moveTo(11.0F, 5.5F)
          curveToRelative(0.0F, 1.763F, -1.304F, 3.222F, -3.0F, 3.465F)
          verticalLineTo(11.5F)
          horizontalLineToRelative(6.25F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(8.855F)
          curveTo(15.054F, 8.425F, 14.0F, 7.085F, 14.0F, 5.5F)
          curveTo(14.0F, 3.567F, 15.567F, 2.0F, 17.5F, 2.0F)
          reflectiveCurveTo(21.0F, 3.567F, 21.0F, 5.5F)
          curveToRelative(0.0F, 1.763F, -1.304F, 3.222F, -3.0F, 3.465F)
          verticalLineTo(9.25F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(2.035F)
          curveToRelative(1.696F, 0.243F, 3.0F, 1.702F, 3.0F, 3.465F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          reflectiveCurveTo(4.0F, 20.433F, 4.0F, 18.5F)
          curveToRelative(0.0F, -1.585F, 1.054F, -2.925F, 2.5F, -3.355F)
          verticalLineToRelative(-6.29F)
          curveTo(5.054F, 8.425F, 4.0F, 7.085F, 4.0F, 5.5F)
          curveTo(4.0F, 3.567F, 5.567F, 2.0F, 7.5F, 2.0F)
          reflectiveCurveTo(11.0F, 3.567F, 11.0F, 5.5F)
          close()        
      }
    }
    return _branchFork24!!
  }

private var _branchFork24: ImageVector? = null
