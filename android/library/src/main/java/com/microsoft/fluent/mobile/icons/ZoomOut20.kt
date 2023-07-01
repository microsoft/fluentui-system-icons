package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ZoomOut20: ImageVector
  get() {
    if (_zoomOut20 != null) {
      return _zoomOut20!!
    }
    _zoomOut20 = fluentIcon(name = "Filled.ZoomOut20", 20f) {
      materialPath {
          moveTo(14.0F, 8.5F)
          curveTo(14.0F, 5.462F, 11.538F, 3.0F, 8.5F, 3.0F)
          reflectiveCurveTo(3.0F, 5.462F, 3.0F, 8.5F)
          reflectiveCurveTo(5.462F, 14.0F, 8.5F, 14.0F)
          curveToRelative(1.248F, 0.0F, 2.4F, -0.416F, 3.323F, -1.117F)
          lineToRelative(4.147F, 4.147F)
          lineToRelative(0.084F, 0.073F)
          curveToRelative(0.293F, 0.218F, 0.71F, 0.194F, 0.976F, -0.073F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-4.147F, -4.147F)
          curveTo(13.584F, 10.899F, 14.0F, 9.748F, 14.0F, 8.5F)
          close()
          moveToRelative(-3.0F, -0.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(11.414F, 9.25F, 11.0F, 9.25F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(5.586F, 7.75F, 6.0F, 7.75F)
          horizontalLineToRelative(5.0F)
          close()        
      }
    }
    return _zoomOut20!!
  }

private var _zoomOut20: ImageVector? = null
