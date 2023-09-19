package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoClipOff16: ImageVector
  get() {
    if (_videoClipOff16 != null) {
      return _videoClipOff16!!
    }
    _videoClipOff16 = fluentIcon(name = "Filled.VideoClipOff16", 16f) {
      materialPath {
          moveTo(12.195F, 12.902F)
          lineToRelative(1.951F, 1.952F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.739F, 1.738F)
          curveTo(2.344F, 4.05F, 2.0F, 4.735F, 2.0F, 5.5F)
          verticalLineToRelative(5.0F)
          curveTo(2.0F, 11.88F, 3.12F, 13.0F, 4.5F, 13.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.241F, 0.0F, 0.474F, -0.034F, 0.695F, -0.098F)
          close()
          moveTo(8.699F, 9.406F)
          lineToRelative(-1.712F, 1.046F)
          curveTo(6.774F, 10.583F, 6.5F, 10.43F, 6.5F, 10.18F)
          verticalLineTo(7.207F)
          lineToRelative(2.199F, 2.2F)
          close()
          moveToRelative(1.547F, -1.867F)
          curveToRelative(0.272F, 0.167F, 0.33F, 0.514F, 0.171F, 0.757F)
          lineToRelative(3.32F, 3.32F)
          curveTo(13.905F, 11.28F, 14.0F, 10.901F, 14.0F, 10.5F)
          verticalLineToRelative(-5.0F)
          curveTo(14.0F, 4.12F, 12.88F, 3.0F, 11.5F, 3.0F)
          horizontalLineTo(5.121F)
          lineTo(8.74F, 6.619F)
          lineToRelative(1.506F, 0.92F)
          close()        
      }
    }
    return _videoClipOff16!!
  }

private var _videoClipOff16: ImageVector? = null
