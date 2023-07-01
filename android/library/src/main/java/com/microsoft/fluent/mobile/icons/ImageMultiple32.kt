package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageMultiple32: ImageVector
  get() {
    if (_imageMultiple32 != null) {
      return _imageMultiple32!!
    }
    _imageMultiple32 = fluentIcon(name = "Filled.ImageMultiple32", 32f) {
      materialPath {
          moveTo(7.0F, 3.0F)
          curveTo(4.79F, 3.0F, 3.0F, 4.79F, 3.0F, 7.0F)
          verticalLineToRelative(14.0F)
          curveToRelative(0.0F, 0.745F, 0.204F, 1.443F, 0.559F, 2.04F)
          lineToRelative(8.834F, -8.392F)
          curveToRelative(0.9F, -0.856F, 2.313F, -0.856F, 3.214F, 0.0F)
          lineToRelative(8.834F, 8.392F)
          curveTo(24.796F, 22.443F, 25.0F, 21.745F, 25.0F, 21.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(16.023F, 21.451F)
          lineToRelative(-8.793F, -8.354F)
          curveToRelative(-0.13F, -0.122F, -0.33F, -0.122F, -0.46F, 0.0F)
          lineToRelative(-8.793F, 8.354F)
          curveTo(5.57F, 24.8F, 6.262F, 25.0F, 7.0F, 25.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(0.738F, 0.0F, 1.43F, -0.2F, 2.023F, -0.549F)
          close()
          moveTo(20.0F, 10.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          reflectiveCurveTo(17.0F, 11.328F, 17.0F, 10.5F)
          reflectiveCurveTo(17.672F, 9.0F, 18.5F, 9.0F)
          reflectiveCurveTo(20.0F, 9.672F, 20.0F, 10.5F)
          close()
          moveToRelative(-9.5F, 18.0F)
          curveToRelative(-1.48F, 0.0F, -2.773F, -0.804F, -3.465F, -2.0F)
          horizontalLineTo(21.0F)
          curveToRelative(3.038F, 0.0F, 5.5F, -2.462F, 5.5F, -5.5F)
          verticalLineTo(7.035F)
          curveToRelative(1.196F, 0.692F, 2.0F, 1.984F, 2.0F, 3.465F)
          verticalLineTo(21.0F)
          curveToRelative(0.0F, 4.142F, -3.358F, 7.5F, -7.5F, 7.5F)
          horizontalLineTo(10.5F)
          close()        
      }
    }
    return _imageMultiple32!!
  }

private var _imageMultiple32: ImageVector? = null
