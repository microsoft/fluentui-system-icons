package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SendClock24: ImageVector
  get() {
    if (_sendClock24 != null) {
      return _sendClock24!!
    }
    _sendClock24 = fluentIcon(name = "Filled.SendClock24", 24f) {
      materialPath {
          moveTo(12.815F, 12.197F)
          lineToRelative(-7.532F, 1.255F)
          curveToRelative(-0.176F, 0.03F, -0.323F, 0.15F, -0.386F, 0.318F)
          lineTo(2.3F, 20.728F)
          curveToRelative(-0.248F, 0.64F, 0.421F, 1.25F, 1.035F, 0.942F)
          lineToRelative(7.674F, -3.837F)
          curveTo(11.003F, 17.723F, 11.0F, 17.612F, 11.0F, 17.5F)
          curveToRelative(0.0F, -3.59F, 2.91F, -6.5F, 6.5F, -6.5F)
          curveToRelative(1.553F, 0.0F, 2.98F, 0.545F, 4.097F, 1.454F)
          curveToRelative(0.268F, -0.353F, 0.18F, -0.904F, -0.263F, -1.125F)
          lineToRelative(-18.0F, -9.0F)
          curveTo(2.72F, 2.022F, 2.05F, 2.632F, 2.299F, 3.27F)
          lineToRelative(2.598F, 6.958F)
          curveToRelative(0.063F, 0.167F, 0.21F, 0.289F, 0.386F, 0.318F)
          lineToRelative(7.532F, 1.255F)
          curveToRelative(0.109F, 0.018F, 0.182F, 0.122F, 0.164F, 0.23F)
          curveToRelative(-0.014F, 0.085F, -0.08F, 0.15F, -0.164F, 0.165F)
          close()
          moveTo(17.5F, 12.0F)
          curveToRelative(3.038F, 0.0F, 5.5F, 2.462F, 5.5F, 5.5F)
          reflectiveCurveTo(20.538F, 23.0F, 17.5F, 23.0F)
          reflectiveCurveTo(12.0F, 20.538F, 12.0F, 17.5F)
          reflectiveCurveToRelative(2.462F, -5.5F, 5.5F, -5.5F)
          close()
          moveToRelative(2.0F, 5.5F)
          horizontalLineToRelative(-2.0F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveToRelative(-0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          close()        
      }
    }
    return _sendClock24!!
  }

private var _sendClock24: ImageVector? = null
