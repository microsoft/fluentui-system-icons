package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnDownUp48: ImageVector
  get() {
    if (_arrowTurnDownUp48 != null) {
      return _arrowTurnDownUp48!!
    }
    _arrowTurnDownUp48 = fluentIcon(name = "Regular.ArrowTurnDownUp48", 48f) {
      materialPath {
          moveTo(38.378F, 6.71F)
          curveToRelative(-0.287F, -0.6F, -0.994F, -0.87F, -1.608F, -0.614F)
          lineToRelative(-12.0F, 5.0F)
          curveToRelative(-0.638F, 0.266F, -0.939F, 0.998F, -0.674F, 1.635F)
          curveToRelative(0.266F, 0.637F, 0.998F, 0.939F, 1.635F, 0.673F)
          lineToRelative(9.483F, -3.951F)
          lineTo(23.0F, 39.273F)
          lineTo(10.407F, 8.525F)
          curveToRelative(-0.262F, -0.638F, -0.992F, -0.944F, -1.63F, -0.683F)
          curveToRelative(-0.64F, 0.262F, -0.945F, 0.992F, -0.683F, 1.631F)
          lineToRelative(12.824F, 31.31F)
          curveToRelative(0.763F, 1.864F, 3.401F, 1.864F, 4.164F, 0.0F)
          lineToRelative(12.373F, -30.207F)
          lineToRelative(4.168F, 8.713F)
          curveToRelative(0.297F, 0.622F, 1.044F, 0.886F, 1.667F, 0.588F)
          curveToRelative(0.622F, -0.298F, 0.886F, -1.044F, 0.588F, -1.667F)
          lineToRelative(-5.5F, -11.5F)
          close()        
      }
    }
    return _arrowTurnDownUp48!!
  }

private var _arrowTurnDownUp48: ImageVector? = null
