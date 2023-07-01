package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailUnread24: ImageVector
  get() {
    if (_mailUnread24 != null) {
      return _mailUnread24!!
    }
    _mailUnread24 = fluentIcon(name = "Filled.MailUnread24", 24f) {
      materialPath {
          moveTo(21.0F, 8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
          curveToRelative(-1.32F, 0.0F, -2.441F, 0.853F, -2.842F, 2.038F)
          curveTo(18.055F, 4.34F, 18.0F, 4.663F, 18.0F, 5.0F)
          curveToRelative(0.0F, 1.364F, 0.91F, 2.516F, 2.158F, 2.88F)
          curveTo(20.425F, 7.958F, 20.708F, 8.0F, 21.0F, 8.0F)
          close()
          moveTo(5.25F, 4.0F)
          horizontalLineToRelative(11.361F)
          curveTo(16.538F, 4.322F, 16.5F, 4.656F, 16.5F, 5.0F)
          curveToRelative(0.0F, 1.563F, 0.796F, 2.939F, 2.005F, 3.746F)
          lineTo(12.0F, 12.153F)
          lineToRelative(-9.984F, -5.23F)
          curveToRelative(0.158F, -1.58F, 1.448F, -2.828F, 3.048F, -2.918F)
          lineTo(5.25F, 4.0F)
          close()
          moveToRelative(7.098F, 9.664F)
          lineToRelative(8.03F, -4.207F)
          curveTo(20.582F, 9.485F, 20.79F, 9.5F, 21.0F, 9.5F)
          curveToRelative(0.344F, 0.0F, 0.678F, -0.039F, 1.0F, -0.111F)
          verticalLineToRelative(7.361F)
          curveToRelative(0.0F, 1.733F, -1.357F, 3.15F, -3.066F, 3.245F)
          lineTo(18.75F, 20.0F)
          horizontalLineTo(5.25F)
          curveToRelative(-1.733F, 0.0F, -3.15F, -1.357F, -3.245F, -3.066F)
          lineTo(2.0F, 16.75F)
          verticalLineTo(8.608F)
          lineToRelative(9.652F, 5.056F)
          curveToRelative(0.218F, 0.114F, 0.478F, 0.114F, 0.696F, 0.0F)
          close()        
      }
    }
    return _mailUnread24!!
  }

private var _mailUnread24: ImageVector? = null
