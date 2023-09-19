package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BranchFork16: ImageVector
  get() {
    if (_branchFork16 != null) {
      return _branchFork16!!
    }
    _branchFork16 = fluentIcon(name = "Filled.BranchFork16", 16f) {
      materialPath {
          moveTo(7.0F, 3.5F)
          curveToRelative(0.0F, 1.21F, -0.859F, 2.218F, -2.0F, 2.45F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(4.5F)
          curveTo(10.328F, 8.0F, 11.0F, 7.328F, 11.0F, 6.5F)
          verticalLineTo(5.95F)
          curveTo(9.859F, 5.718F, 9.0F, 4.71F, 9.0F, 3.5F)
          curveTo(9.0F, 2.12F, 10.12F, 1.0F, 11.5F, 1.0F)
          reflectiveCurveTo(14.0F, 2.12F, 14.0F, 3.5F)
          curveToRelative(0.0F, 1.21F, -0.859F, 2.218F, -2.0F, 2.45F)
          verticalLineTo(6.5F)
          curveTo(12.0F, 7.88F, 10.88F, 9.0F, 9.5F, 9.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(1.05F)
          curveToRelative(1.141F, 0.232F, 2.0F, 1.24F, 2.0F, 2.45F)
          curveTo(7.0F, 13.88F, 5.88F, 15.0F, 4.5F, 15.0F)
          reflectiveCurveTo(2.0F, 13.88F, 2.0F, 12.5F)
          curveToRelative(0.0F, -1.21F, 0.859F, -2.218F, 2.0F, -2.45F)
          verticalLineToRelative(-4.1F)
          curveTo(2.859F, 5.718F, 2.0F, 4.71F, 2.0F, 3.5F)
          curveTo(2.0F, 2.12F, 3.12F, 1.0F, 4.5F, 1.0F)
          reflectiveCurveTo(7.0F, 2.12F, 7.0F, 3.5F)
          close()        
      }
    }
    return _branchFork16!!
  }

private var _branchFork16: ImageVector? = null
