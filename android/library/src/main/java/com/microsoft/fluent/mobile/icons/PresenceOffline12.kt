package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceOffline12: ImageVector
  get() {
    if (_presenceOffline12 != null) {
      return _presenceOffline12!!
    }
    _presenceOffline12 = fluentIcon(name = "Regular.PresenceOffline12", 12f) {
      materialPath {
          moveTo(8.03F, 3.97F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(7.06F, 6.0F)
          lineToRelative(0.97F, 0.97F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.768F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(6.0F, 7.06F)
          lineTo(5.03F, 8.03F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(4.94F, 6.0F)
          lineTo(3.97F, 5.03F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(6.0F, 4.94F)
          lineToRelative(0.97F, -0.97F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          close()
          moveTo(0.0F, 6.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          close()
          moveToRelative(6.0F, -4.5F)
          curveTo(3.515F, 1.5F, 1.5F, 3.515F, 1.5F, 6.0F)
          reflectiveCurveToRelative(2.015F, 4.5F, 4.5F, 4.5F)
          reflectiveCurveToRelative(4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(8.485F, 1.5F, 6.0F, 1.5F)
          close()        
      }
    }
    return _presenceOffline12!!
  }

private var _presenceOffline12: ImageVector? = null
