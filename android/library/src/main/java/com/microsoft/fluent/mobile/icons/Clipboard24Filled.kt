package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Clipboard24: ImageVector
  get() {
    if (_clipboard24 != null) {
      return _clipboard24!!
    }
    _clipboard24 = fluentIcon(name = "Filled.Clipboard24", 24f) {
      materialPath {
          moveTo(13.75F, 3.5F)
          horizontalLineToRelative(-3.5F)
          curveTo(9.836F, 3.5F, 9.5F, 3.836F, 9.5F, 4.25F)
          reflectiveCurveTo(9.836F, 5.0F, 10.25F, 5.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(14.164F, 3.5F, 13.75F, 3.5F)
          close()
          moveTo(10.25F, 2.0F)
          horizontalLineToRelative(3.5F)
          curveTo(14.993F, 2.0F, 16.0F, 3.007F, 16.0F, 4.25F)
          curveToRelative(0.0F, -0.085F, -0.005F, -0.168F, -0.014F, -0.25F)
          horizontalLineToRelative(1.764F)
          curveTo(18.993F, 4.0F, 20.0F, 5.007F, 20.0F, 6.25F)
          verticalLineToRelative(13.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(6.25F)
          curveTo(5.007F, 22.0F, 4.0F, 20.993F, 4.0F, 19.75F)
          verticalLineTo(6.25F)
          curveTo(4.0F, 5.007F, 5.007F, 4.0F, 6.25F, 4.0F)
          horizontalLineToRelative(1.764F)
          curveTo(8.004F, 4.081F, 8.0F, 4.164F, 8.0F, 4.25F)
          curveTo(8.0F, 3.007F, 9.007F, 2.0F, 10.25F, 2.0F)
          close()        
      }
    }
    return _clipboard24!!
  }

private var _clipboard24: ImageVector? = null
