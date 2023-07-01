package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Cloud16: ImageVector
  get() {
    if (_cloud16 != null) {
      return _cloud16!!
    }
    _cloud16 = fluentIcon(name = "Filled.Cloud16", 16f) {
      materialPath {
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
