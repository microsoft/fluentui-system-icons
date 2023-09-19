package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoSecurity24: ImageVector
  get() {
    if (_videoSecurity24 != null) {
      return _videoSecurity24!!
    }
    _videoSecurity24 = fluentIcon(name = "Filled.VideoSecurity24", 24f) {
      materialPath {
          moveTo(2.0F, 6.25F)
          curveTo(2.0F, 4.455F, 3.455F, 3.0F, 5.25F, 3.0F)
          horizontalLineToRelative(8.5F)
          curveTo(15.545F, 3.0F, 17.0F, 4.455F, 17.0F, 6.25F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineToRelative(-8.5F)
          curveTo(3.455F, 16.0F, 2.0F, 14.545F, 2.0F, 12.75F)
          verticalLineToRelative(-6.5F)
          close()
          moveToRelative(19.62F, -2.653F)
          curveTo(21.854F, 3.731F, 22.0F, 3.98F, 22.0F, 4.25F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.27F, -0.145F, 0.52F, -0.38F, 0.653F)
          curveToRelative(-0.236F, 0.133F, -0.524F, 0.13F, -0.756F, -0.01F)
          lineTo(18.0F, 13.675F)
          verticalLineToRelative(-8.35F)
          lineToRelative(2.864F, -1.718F)
          curveToRelative(0.232F, -0.14F, 0.52F, -0.143F, 0.755F, -0.01F)
          close()
          moveTo(8.134F, 17.0F)
          curveToRelative(-0.318F, 1.014F, -1.266F, 1.75F, -2.385F, 1.75F)
          horizontalLineToRelative(-2.0F)
          curveTo(3.336F, 18.75F, 3.0F, 19.086F, 3.0F, 19.5F)
          verticalLineToRelative(1.6F)
          curveTo(3.0F, 21.597F, 3.403F, 22.0F, 3.9F, 22.0F)
          horizontalLineToRelative(1.944F)
          curveToRelative(3.004F, 0.0F, 5.506F, -2.153F, 6.048F, -5.0F)
          horizontalLineTo(8.136F)
          close()        
      }
    }
    return _videoSecurity24!!
  }

private var _videoSecurity24: ImageVector? = null
