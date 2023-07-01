package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowEnterUp24: ImageVector
  get() {
    if (_arrowEnterUp24 != null) {
      return _arrowEnterUp24!!
    }
    _arrowEnterUp24 = fluentIcon(name = "Regular.ArrowEnterUp24", 24f) {
      materialPath {
          moveTo(20.0F, 21.25F)
          curveToRelative(0.0F, 0.415F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-6.5F)
          curveTo(10.679F, 22.0F, 9.0F, 20.323F, 9.0F, 18.25F)
          verticalLineTo(4.587F)
          lineToRelative(-3.72F, 3.72F)
          curveToRelative(-0.266F, 0.266F, -0.683F, 0.29F, -0.976F, 0.072F)
          lineTo(4.22F, 8.306F)
          curveTo(3.953F, 8.039F, 3.93F, 7.623F, 4.147F, 7.329F)
          lineTo(4.22F, 7.245F)
          lineToRelative(5.0F, -5.0F)
          curveToRelative(0.266F, -0.266F, 0.683F, -0.29F, 0.976F, -0.073F)
          lineToRelative(0.084F, 0.073F)
          lineToRelative(5.0F, 5.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.768F, 0.0F, 1.06F)
          curveToRelative(-0.266F, 0.267F, -0.683F, 0.291F, -0.976F, 0.073F)
          lineTo(14.22F, 8.306F)
          lineToRelative(-3.72F, -3.72F)
          verticalLineToRelative(13.665F)
          curveToRelative(0.0F, 1.19F, 0.925F, 2.165F, 2.096F, 2.244F)
          lineToRelative(0.154F, 0.006F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.335F, 0.75F, 0.75F)
          close()        
      }
    }
    return _arrowEnterUp24!!
  }

private var _arrowEnterUp24: ImageVector? = null
