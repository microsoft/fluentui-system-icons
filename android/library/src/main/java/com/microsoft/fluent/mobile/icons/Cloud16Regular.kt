package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Cloud16: ImageVector
  get() {
    if (_cloud16 != null) {
      return _cloud16!!
    }
    _cloud16 = fluentIcon(name = "Regular.Cloud16", 16f) {
      materialPath {
          moveTo(8.0F, 3.0F)
          curveTo(6.343F, 3.0F, 5.0F, 4.343F, 5.0F, 6.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(4.25F)
          curveTo(3.007F, 6.5F, 2.0F, 7.507F, 2.0F, 8.75F)
          reflectiveCurveTo(3.007F, 11.0F, 4.25F, 11.0F)
          horizontalLineToRelative(7.5F)
          curveTo(12.993F, 11.0F, 14.0F, 9.993F, 14.0F, 8.75F)
          reflectiveCurveTo(12.993F, 6.5F, 11.75F, 6.5F)
          horizontalLineTo(11.5F)
          curveTo(11.224F, 6.5F, 11.0F, 6.276F, 11.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          close()
          moveTo(4.03F, 5.507F)
          curveTo(4.273F, 3.531F, 5.958F, 2.0F, 8.0F, 2.0F)
          curveToRelative(2.042F, 0.0F, 3.727F, 1.53F, 3.97F, 3.507F)
          curveTo(13.662F, 5.62F, 15.0F, 7.03F, 15.0F, 8.75F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineToRelative(-7.5F)
          curveTo(2.455F, 12.0F, 1.0F, 10.545F, 1.0F, 8.75F)
          curveToRelative(0.0F, -1.721F, 1.338F, -3.13F, 3.03F, -3.243F)
          close()        
      }
    }
    return _cloud16!!
  }

private var _cloud16: ImageVector? = null
